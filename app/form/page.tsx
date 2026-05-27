"use client";

import { useState } from "react";

export default function ProtesisFormPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);

    const payload = {
      user_id: "test-user",
      dog_name: form.get("dog_name"),
      dog_weight_kg: Number(form.get("dog_weight_kg")),
      dog_breed: form.get("dog_breed"),
      dog_size: form.get("dog_size"),
      limb_position: form.get("limb_position"),
      limb_side: form.get("limb_side"),
      stump_length_cm: Number(form.get("stump_length_cm")),
      proximal_circumference_cm: Number(form.get("proximal_circumference_cm")),
      distal_circumference_cm: Number(form.get("distal_circumference_cm")),
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/prosthesis/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log("Respuesta FastAPI:", data);
      alert("Solicitud enviada correctamente");
    } catch (error) {
      console.error(error);
      alert("Error enviando solicitud");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ maxWidth: 500, margin: "40px auto", fontFamily: "Arial" }}>
      <h1>Generar prótesis</h1>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
        <input name="dog_name" placeholder="Nombre del perro" required />
        <input name="dog_weight_kg" type="number" placeholder="Peso en kg" required />
        <input name="dog_breed" placeholder="Raza" />

        <select name="dog_size" required>
          <option value="">Tamaño</option>
          <option value="pequeño">Pequeño</option>
          <option value="mediano">Mediano</option>
          <option value="grande">Grande</option>
        </select>

        <select name="limb_position" required>
          <option value="">Pata</option>
          <option value="delantera">Delantera</option>
          <option value="trasera">Trasera</option>
        </select>

        <select name="limb_side" required>
          <option value="">Lado</option>
          <option value="izquierda">Izquierda</option>
          <option value="derecha">Derecha</option>
        </select>

        <input name="stump_length_cm" type="number" placeholder="Largo del muñón en cm" required />
        <input name="proximal_circumference_cm" type="number" placeholder="Circunferencia proximal cm" required />
        <input name="distal_circumference_cm" type="number" placeholder="Circunferencia distal cm" required />

        <button type="submit" disabled={loading}>
          {loading ? "Generando..." : "Generar STL"}
        </button>
      </form>
    </main>
  );
}