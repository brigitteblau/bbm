NEXT_PUBLIC_SUPABASE_URL=https://vmubcnhykffxjjfwsnsg.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_J9lpoUdxKc0UIwXfM0ZAjA_6F91P3Nj
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
BBM_SERVER_URL=https://bbm-server-hfq1.onrender.com
NEXT_PUBLIC_API_URL=https://bbm-server-hfq1.onrender.com


NEXT_PUBLIC_SUPABASE_URL=https://vmubcnhykffxjjfwsnsg.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_J9lpoUdxKc0UIwXfM0ZAjA_6F91P3Nj
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtdWJjbmh5a2ZmeGpqZndzbnNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2OTY2NDEsImV4cCI6MjA5NDI3MjY0MX0.gU2vuZEVCmdq3dm4qkxhFThMcvWZ4MtoKIkmiSSsi0s
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtdWJjbmh5a2ZmeGpqZndzbnNnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODY5NjY0MSwiZXhwIjoyMDk0MjcyNjQxfQ.CSnJXXXCFrL4L9C5FHdv6BUf_J-XoHlVF56O5AtXKfw
BBM_SERVER_URL=https://bbm-server-hfq1.onrender.com
NEXT_PUBLIC_API_URL=https://bbm-server-hfq1.onrender.com

Sí. Hagamos el flujo prolijo y evitamos CORS usando una API interna de Next.

Creá estos archivos en tu repo de Next, no en bbm-server.

1. Archivo nuevo
app/api/prosthesis/generate/route.ts

Pegá esto:

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const API_URL = process.env.BBM_SERVER_URL!;

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    const { data: request, error: insertError } = await supabase
      .from("prosthesis_requests")
      .insert({
        user_id: null,
        dog_name: payload.dog_name,
        dog_weight_kg: payload.dog_weight_kg,
        dog_breed: payload.dog_breed,
        dog_size: payload.dog_size,
        limb_position: payload.limb_position,
        limb_side: payload.limb_side,
        stump_length_cm: payload.stump_length_cm,
        proximal_circumference_cm: payload.proximal_circumference_cm,
        distal_circumference_cm: payload.distal_circumference_cm,
        status: "pending",
      })
      .select()
      .single();

    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 400 });
    }

    const backendPayload = {
      user_id: "test-user",
      dog_name: payload.dog_name,
      dog_weight_kg: payload.dog_weight_kg,
      dog_breed: payload.dog_breed,
      dog_size: payload.dog_size,
      limb_position: payload.limb_position,
      limb_side: payload.limb_side,
      stump_length_cm: payload.stump_length_cm,
      proximal_circumference_cm: payload.proximal_circumference_cm,
      distal_circumference_cm: payload.distal_circumference_cm,
    };

    const response = await fetch(`${API_URL}/prosthesis/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(backendPayload),
    });

    const result = await response.json();

    if (!response.ok) {
      await supabase
        .from("prosthesis_requests")
        .update({ status: "error" })
        .eq("id", request.id);

      return NextResponse.json(result, { status: response.status });
    }

    await supabase
      .from("prosthesis_requests")
      .update({
        status: "completed",
        stl_url: result.generated_path,
      })
      .eq("id", request.id);

    return NextResponse.json({
      success: true,
      request_id: request.id,
      result,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error generando prótesis" },
      { status: 500 }
    );
  }
}
2. En tu form cambiá el fetch

En app/form/page.tsx, reemplazá esto:

fetch(`${apiUrl}/prosthesis/generate`, {

por esto:

fetch("/api/prosthesis/generate", {

O sea queda:

const res = await fetch("/api/prosthesis/generate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
});
3. En .env.local

Poné esto:

NEXT_PUBLIC_SUPABASE_URL=https://TU-PROYECTO.supabase.co
SUPABASE_SERVICE_ROLE_KEY=TU_SERVICE_ROLE_KEY
BBM_SERVER_URL=https://bbm-server-hfq1.onrender.com

Importante: BBM_SERVER_URL sin / al final.

4. Reiniciá Next
Ctrl + C
npm run dev
5. Probás

Entrás a:

http://localhost:3000/form

Completás el form.

Ahora el flujo es:

form → Next API → Supabase → Render/FastAPI → Supabase update

Y ya no debería aparecer CORS.