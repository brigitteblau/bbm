export default function Navbar() {
  return (
    <nav className="w-full bg-[#D4D0CE] h-[50px] flex items-center border-b border-[#999]">
      {/* Logo - con más espacio desde la izquierda */}
      <span className="text-[18px] font-bold text-[#111] flex-shrink-0 ml-8">
        hunda
      </span>

      {/* Links centrales */}
      <div className="flex gap-8 flex-1 justify-center">
        <a href="/" className="text-[13px] text-[#111] no-underline hover:opacity-60">
          Home
        </a>
        <a href="/dashboard" className="text-[13px] text-[#111] no-underline hover:opacity-60">
          Dashboard
        </a>
        <a href="/help" className="text-[13px] text-[#111] no-underline hover:opacity-60">
          Help
        </a>
        <a href="/contact" className="text-[13px] text-[#111] no-underline hover:opacity-60">
          Contact Us
        </a>
      </div>

      {/* Botones derechos - con más espacio desde la derecha */}
      <div className="flex items-center gap-3 flex-shrink-0 mr-8">
        <a
          href="/login"
          className="px-4 py-1.5 text-[12px] text-[#111] border border-[#666] rounded-full no-underline hover:bg-[#bbb]"
        >
          inicia sesión
        </a>
        <a
          href="/register"
          className="px-4 py-1.5 text-[12px] text-white bg-[#111] rounded-full no-underline hover:bg-[#333]"
        >
          registrate
        </a>
      </div>
    </nav>
  );
}