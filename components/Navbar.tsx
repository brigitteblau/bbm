export default function Navbar() {
  return (
    <nav className="w-full bg-[#D4D0CE]">
      <div className="flex items-center h-[50px] px-10">

        <span className="text-[18px] font-bold text-[#111] shrink-0 ml-6">
          hunda
        </span>

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

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/login"
            className="whitespace-nowrap px-3 py-1 text-[13px] text-[#111] border border-[#666] rounded-full no-underline hover:bg-[#bbb]"
          >
            inicia sesión
          </a>
          <a
            href="/register"
            className="px-4 py-1.5 text-[13px] text-white bg-[#111] rounded-full no-underline hover:bg-[#333]"
          >
            registrate
          </a>
        </div>

      </div>
    </nav>
  );
}