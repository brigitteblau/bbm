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
        user_id: "00000000-0000-0000-0000-000000000000",
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
      console.log("Insert error:", insertError);
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
      headers: { "Content-Type": "application/json" },
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