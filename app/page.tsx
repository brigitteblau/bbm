import Navbar from "@/components/Navbar";

export default function LandingPage() {
  return (
    <div className="w-full font-sans">
      <Navbar />

      {/* ── HERO ── */}
      <section className="bg-[#F5F5F0] min-h-[calc(100vh-60px)] flex items-center px-12 lg:px-20">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-24">
        {/* Left: texto + botones + tags */}
        <div className="flex-1 max-w-[620px] flex flex-col justify-start">
          <h1  className="text-[#1A1A1A] text-[58px] font-medium leading-[1.15] ">
            Tecnología para<br />devolver movimiento.
          </h1>
          <p className="max-w-[430px] text-[15px] leading-8 text-[#666] mb-12">
            Diseñá prótesis caninas personalizadas a través de nuestra plataforma
            digital y fabricación 3D.
          </p>

          {/* Botones */}
          <div className="flex items-center gap-10 mt-4">
            <button className="bg-[#56965A] hover:bg-[#4a8a4e] text-white text-sm font-medium px-8 py-2 rounded-full transition-colors flex items-center gap-2">
              Creá tu prótesis <span>→</span>
            </button>
            <button className="border border-[#1A1A1A] text-[#1A1A1A] text-sm font-medium px-8 py-3 rounded-full hover:bg-[#1A1A1A] hover:text-white transition-colors">
              Ver DEMO
            </button>
          </div>

          {/* Tags */}
          <div className="flex items-center gap-12 mb-16">
            <span>Personalizadas</span>
            <span>Rápidas</span>
            <span>Accesibles</span>
          </div>
        </div>

        {/* Right: card rosado con opciones */}
        <div className="w-[260px] h-[380px] bg-[#C96262] rounded-[30px] px-5 py-8 flex flex-col justify-center gap-10 shadow-sm">
          <p className="text-white text-[15px] leading-7 font-normal">
            Opción 1: Imagen de prótesis de perro con perro o ejemplo.
          </p>
          <p className="text-white text-[15px] leading-7 font-normal">
            Opción 2: Animación / holograma
          </p>
          <p className="text-white text-[15px] leading-7 font-normal">
            Opción 3: Demo
          </p>
        </div>
      </div>
      </section>
{/* ── PROCESO EN 3 PASOS ── */}
<section className="bg-[#C7C7C7] py-14">
  <div className="w-full px-12">
    <p className="text-center text-[#1A1A1A] text-[11px] uppercase tracking-[0.2em] mb-2">
      Cómo funciona
    </p>

    <h2 className="text-center text-[#1A1A1A] text-4xl font-light uppercase mb-10">
      UN PROCESO SIMPLE EN 3 PASOS
    </h2>

    <div className="grid grid-cols-3 gap-8 max-w-[1500px] mx-auto">
      {[
        {
          num: "01",
          titulo: "Medí",
          desc: "Ingresá las medidas y especificaciones de tu perro a través de nuestro formulario.",
        },
        {
          num: "02",
          titulo: "Diseñá",
          desc: "Personalizalo según tus necesidades.",
        },
        {
          num: "03",
          titulo: "Fabricá",
          desc: "Generá el modelo listo para impresión 3D.",
        },
      ].map((step) => (
<div
  key={step.num}
  className="bg-[#D9D9D9] rounded-[20px] h-[280px] px-8 pt-7"
>
  {/* Ícono */}
  <div className="flex justify-center">
    <div className="w-[76px] h-[76px] bg-[#1A1A1A] rounded-[18px] flex items-center justify-center text-white text-base">
      icono
    </div>
  </div>

  {/* Texto */}
  <div className="mt-8">
    <h3 className="text-[28px] leading-none font-light text-[#1A1A1A]">
      {step.num}
    </h3>

    <h4 className="text-[22px] leading-tight font-light mt-1 text-[#1A1A1A]">
      {step.titulo}
    </h4>

    <p className="text-[13px] leading-5 text-[#555] mt-2">
      {step.desc}
    </p>
  </div>
</div>
      ))}
    </div>
  </div>
</section>

      {/* ── CONTROL PANEL / FEATURES ── */}
<section className="bg-[#D9D9D9] py-20">
  <div className="max-w-7xl mx-auto px-8 lg:px-12">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Texto */}
      <div className="max-w-md">

        <p className="uppercase tracking-[3px] text-sm text-black/70 mb-4">
          La Plataforma
        </p>

        <h2 className="text-[clamp(2.4rem,4vw,4rem)] leading-tight font-light text-black mb-6">
          Controlá todo desde un único lugar.
        </h2>

        <p className="text-[clamp(1rem,1.3vw,1.45rem)] text-black/80 leading-relaxed mb-10">
          Diseñá, guardá y hacé seguimiento de todas las prótesis en tu dashboard
          personal.
        </p>

        <div className="space-y-5 mb-10">

          {[
            "Crear nuevos prótesis",
            "Gestionar diseños",
            "Historial de versiones",
            "Exportar modelos 3D",
          ].map((item) => (
            <div key={item} className="flex items-center gap-4">
              <div className="w-5 h-5 rounded-full bg-[#71E36B]" />
              <span className="text-lg text-black">{item}</span>
            </div>
          ))}

        </div>

        <button className="bg-[#56965A] hover:brightness-95 transition rounded-full text-white px-8 py-4 flex items-center gap-8 text-lg">
          <span>Ir a la plataforma</span>
          <span className="text-2xl">→</span>
        </button>

      </div>

      {/* Imagen */}

      <div className="flex justify-center">

        <div className="w-full max-w-[700px] aspect-[1049/788] rounded-[26px] bg-[#554F4F] flex items-center justify-center">

          <p className="text-white text-center text-[clamp(1.6rem,2.5vw,2.5rem)] font-light leading-snug">
            imagen de ventana
            <br />
            de inventario
          </p>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* ── IMPRESIÓN 3D ── */}
<section className="w-full bg-[#B5B2B2] py-[4vw] px-[3vw]">
  <p className="uppercase tracking-[0.15em] text-[0.75vw] text-[#1A1A1A] mb-[0.8vw]">
    FABRICACIÓN 3D
  </p>

  <h2 className="text-center text-[#1A1A1A] text-[2.8vw] font-light leading-none mb-[2.8vw]">
    Impresión 3D al servicio del bienestar.
  </h2>
<div className="grid grid-cols-3 gap-5">
  {[
    {
      title: "Personalizada",
      sub: "Cada prótesis se adapta a la anatomía y necesidad de tu perro.",
    },
    {
      title: "Precisa",
      sub: "Utilizamos tecnología de impresión 3D de alta precisión.",
    },
    {
      title: "Accesible",
      sub: "Reducimos costos para que más perros puedan tener movilidad.",
    },
  ].map((card) => (
    <div
      key={card.title}
      className="bg-[#D9D9D9] rounded-[18px] h-[250px] px-8 pt-6"
    >
      {/* Ícono */}
      <div className="flex justify-center">
        <div className="w-[62px] h-[62px] bg-[#1A1A1A] rounded-[14px] flex items-center justify-center text-white text-sm">
          icono
        </div>
      </div>

      {/* Texto */}
      <div className="mt-6">
        <h3 className="text-[22px] leading-none font-light text-[#1A1A1A]">
          {card.title}
        </h3>

        <p className="text-[13px] leading-5 text-[#444] mt-2">
          {card.sub}
        </p>
      </div>
    </div>
  ))}
</div>
</section>

      {/* ── GRACIAS / LOGOS ── */}
<section className="bg-[#C7C7C7] py-16">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <p className="text-[12px] uppercase tracking-wide text-[#333333] mb-2">
      NOS ACOMPAÑAN
    </p>

    <h2 className="text-[38px] font-normal text-[#1A1A1A] leading-tight mb-10">
      Gracias a los que confían en nuestro proyecto
    </h2>

    <img
      src="/images/logo ort.png"
      className="w-[72%] mx-auto h-auto"
/>
  </div>
  </section>
{/* ───────── SOBRE NOSOTROS ───────── */}
<section className="bg-[#D9D9D9] py-16 px-8">
  <div className="max-w-7xl mx-auto">

    {/* Parte superior */}
    <div className="flex justify-between items-start gap-24">

      {/* Texto */}
      <div className="w-[300px] flex-shrink-0">

        <p className="text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A]/70 mb-4">
          SOBRE NOSOTROS
        </p>

        <h2 className="text-[48px] leading-none font-light text-[#1A1A1A] mb-10">
          Somos...
        </h2>

        <p className="text-[14px] leading-6 text-[#1A1A1A] mb-6">
          Estudiantes de ORT TIC apasionados por la tecnología, el diseño y el bienestar animal.
        </p>

        <p className="text-[14px] leading-6 text-[#1A1A1A] mb-10">
          Nuestro objetivo es hacer más accesibles las prótesis personalizadas para mejorar la calidad de vida de las mascotas.
        </p>

        <button className="border border-[#1A1A1A] rounded-full px-8 py-3 text-sm hover:bg-black hover:text-white transition">
          Conocé más sobre nosotros →
        </button>

      </div>

      {/* FOTO */}
      <div className="w-[700px] h-[260px] bg-[#8C4747] rounded-xl flex items-center justify-center flex-shrink-0">
        <span className="text-white text-5xl font-light">
          foto
        </span>
      </div>

    </div>

    {/* Espacio entre la foto y el CTA */}
    <div className="h-12"></div>

    {/* CTA */}
    <div className="bg-[#BCBCBC] rounded-2xl px-8 py-8 flex items-center justify-between">

      {/* Logo */}
      <div className="w-28 flex justify-center">
        {/* PONÉ ACÁ EL LOGO */}
      </div>

      {/* Texto */}
      <div className="flex-1 px-8">

        <h3 className="text-[40px] font-light leading-none text-[#1A1A1A] mb-3">
          ¿Listo para comenzar?
        </h3>

        <p className="text-[15px] text-[#333] leading-6 max-w-md">
          Creá tu cuenta gratis y empezá a diseñar la prótesis que tu perro necesita.
        </p>

      </div>

      {/* Botón */}
      <div className="flex flex-col items-center">

        <button className="bg-[#56965A] rounded-full px-10 py-4 text-sm w-[170px] hover:brightness-95 transition">
          Registrate →
        </button>

        <p className="text-[13px] mt-3 text-[#333]">
          ¿Ya tenés cuenta?{" "}
          <span className="underline cursor-pointer">
            iniciá sesión
          </span>
        </p>

      </div>

    </div>

  </div>
</section>
    </div>
  );
}
