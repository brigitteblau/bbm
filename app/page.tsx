import Navbar from "@/components/Navbar";

export default function LandingPage() {
  return (
    <div className="w-full font-sans">
      <Navbar />

      {/* ── HERO ── */}
      <section className="bg-[#F5F5F0] min-h-[calc(100vh-60px)] flex items-center px-12 lg:px-20">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-24">
        {/* Left: texto + botones + tags */}
        <div className="flex-1 flex flex-col justify-center">
          <h1  className="text-[#1A1A1A] text-6xl font-semibold leading-[1.1] tracking-tight mb-6">
            Tecnología para<br />devolver movimiento.
          </h1>
          <p className="text-[#666] text-base leading-7 max-w-md mb-10">
             Diseñá prótesis caninas personalizadas a través de nuestra plataforma
             digital y fabricación 3D.
          </p>

          {/* Botones */}
          <div className="flex items-center gap-3 mb-10">
            <button className="bg-[#56965A] hover:bg-[#4a8a4e] text-white text-sm font-medium px-8 py-3 rounded-full transition-colors flex items-center gap-2">
              Creá tu prótesis <span>→</span>
            </button>
            <button className="border border-[#1A1A1A] text-[#1A1A1A] text-sm font-medium px-8 py-3 rounded-full hover:bg-[#1A1A1A] hover:text-white transition-colors">
              Ver DEMO
            </button>
          </div>

          {/* Tags */}
          <div className="flex gap-6 text-[#888] text-xs font-medium">
            <span>Personalizadas</span>
            <span>Rápidas</span>
            <span>Accesibles</span>
          </div>
        </div>

        {/* Right: card rosado con opciones */}
        <div className="w-[260px] h-[430px] bg-[#C96262] rounded-[30px] p-8 flex flex-col justify-center gap-10 shadow-sm">
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
      <section className="bg-[#FDF6F0] py-16 px-6">
        <p className="text-center text-[#C05A5A] text-xs uppercase tracking-widest font-bold mb-2">
          Cómo funciona
        </p>
        <h2 className="text-center text-[#1A1A1A] text-2xl font-extrabold mb-10">
          PROCESO SIMPLE EN 3 PASOS
        </h2>

        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { num: "01", label: "Cargá", sub: "Fotos y medidas del animal" },
            { num: "02", label: "Diseño", sub: "El sistema genera el modelo" },
            { num: "03", label: "Imprimís", sub: "Archivo STL listo para usar" },
          ].map((step) => (
            <div key={step.num} className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white font-bold text-sm">
                {step.num}
              </div>
              <span className="text-[#1A1A1A] text-xs font-bold uppercase tracking-wide">
                {step.label}
              </span>
              <span className="text-[#666] text-[11px] leading-tight">{step.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTROL PANEL / FEATURES ── */}
      <section className="bg-[#1A1A1A] py-16 px-6">
        <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Plataforma</p>
        <h2 className="text-white text-2xl font-extrabold leading-tight mb-2">
          Controlá todo desde un único lugar.
        </h2>
        <p className="text-white/50 text-sm mb-8 leading-relaxed">
          Tenés acceso completo al seguimiento de pedidos y al estado de fabricación en tiempo real.
        </p>

        <div className="flex flex-col gap-3 mb-8">
          {[
            "Cargar nuevas prótesis",
            "Gestionar diseños",
            "Estado de pedidos",
            "Agregar modelos 3D",
          ].map((item) => (
            <button
              key={item}
              className="w-full bg-[#2A2A2A] hover:bg-[#333] transition-colors text-white text-sm font-semibold text-left px-5 py-3 rounded-xl"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Inventory window placeholder */}
        <div className="bg-[#2A2A2A] rounded-2xl h-40 flex items-center justify-center">
          <span className="text-white/20 text-xs uppercase tracking-widest">
            Vista de inventario
          </span>
        </div>
      </section>

      {/* ── IMPRESIÓN 3D ── */}
      <section className="bg-[#FDF6F0] py-16 px-6">
        <p className="text-[#C05A5A] text-xs uppercase tracking-widest font-bold mb-2">
          Fabricación
        </p>
        <h2 className="text-[#1A1A1A] text-2xl font-extrabold mb-8 leading-tight">
          Impresión 3D al servicio del bienestar.
        </h2>

        <div className="grid grid-cols-3 gap-4">
          {[
            { title: "Personalizado", sub: "Cada pieza adaptada al animal" },
            { title: "Preciso", sub: "Parámetros ajustados automáticamente" },
            { title: "Accesible", sub: "Red solidaria de impresores" },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-1"
            >
              <div className="w-8 h-8 rounded-full bg-[#1A1A1A] mb-2" />
              <span className="text-[#1A1A1A] text-xs font-bold">{card.title}</span>
              <span className="text-[#888] text-[11px] leading-tight">{card.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── GRACIAS / LOGOS ── */}
      <section className="bg-[#C05A5A] py-12 px-6 text-center">
        <p className="text-white text-sm font-semibold mb-6 opacity-80">
          Gracias a los que confían en nuestro proyecto
        </p>
        <div className="grid grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white/20 rounded-xl h-12 flex items-center justify-center"
            >
              <span className="text-white/40 text-[10px] font-bold">LOGO</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOMOS ── */}
      <section className="bg-[#1A1A1A] py-16 px-6">
        <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Equipo</p>
        <h2 className="text-white text-2xl font-extrabold mb-4">Somos.</h2>
        <div className="bg-[#2A2A2A] rounded-2xl h-48 flex items-center justify-center mb-6">
          <span className="text-white/20 text-xs uppercase tracking-widest">foto</span>
        </div>
        <p className="text-white/50 text-sm leading-relaxed">
          Un equipo de tres estudiantes apasionados por el diseño, la tecnología y el bienestar animal.
        </p>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="bg-[#FDF6F0] py-20 px-6 flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-[#C05A5A] flex items-center justify-center text-white font-bold text-xl mb-6">
          B
        </div>
        <h2 className="text-[#1A1A1A] text-2xl font-extrabold mb-2">
          ¿Listo para comenzar?
        </h2>
        <p className="text-[#666] text-sm mb-8 max-w-xs leading-relaxed">
          Pedí tu primera órtesis personalizada hoy y ayudá a un animal a recuperar su movilidad.
        </p>
        <button className="bg-[#1A1A1A] text-white text-sm font-bold px-8 py-4 rounded-full hover:bg-[#C05A5A] transition-colors">
          Empezar ahora
        </button>
      </section>
    </div>
  );
}
