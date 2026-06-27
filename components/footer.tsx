export default function Footer() {
  return (
    <footer className="w-full bg-[#ADAAAF] px-16 py-12">
      <div className="flex gap-16 items-start">

        {/* Logo + tagline */}
        <div className="flex flex-col gap-3 max-w-[220px]">
          <span className="text-[22px] font-bold text-white">hunda.</span>
          <p className="text-[12px] text-white leading-snug">
            Innovación, bienestar y movimiento para<br />perros
          </p>
        </div>

        {/* Navegación */}
        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-extrabold text-white tracking-widest uppercase mb-1">
            Navegación
          </span>
          {["Inicio", "Cómo funciona", "Plataforma", "FAQ", "Contacto"].map((item) => (
            <a key={item} href="#" className="text-[13px] text-white no-underline hover:opacity-70">
              {item}
            </a>
          ))}
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-extrabold text-white tracking-widest uppercase mb-1">
            Legal
          </span>
          {["Términos y condiciones", "Política de Privacidad"].map((item) => (
            <a key={item} href="#" className="text-[13px] text-white no-underline hover:opacity-70">
              {item}
            </a>
          ))}
        </div>

        {/* Contacto */}
        <div className="flex flex-col gap-2 items-start">
          <span className="text-[11px] font-extrabold text-white tracking-widest uppercase mb-1">
            Contacto
          </span>
          <p className="text-[13px] text-white">betterbm26@gmail.com</p>
          <p className="text-[13px] text-white">+54 9 11 7366 7824</p>
        </div>
      <div className="flex flex-col items-end gap-4 ml-auto">
        <div className="flex gap-3">
          <a href="#"><img src="/tiktok (2).png" width={36} height={36} /></a>
          <a href="#"><img src="/instagram.png" width={36} height={36} /></a>
          <a href="#"><img src="/linkedin.png" width={36} height={36} /></a>
        </div>
        <span className="text-[12px] text-white">© 2026 hunda. – Todos los derechos reservados</span>
      </div>
        </div>
        

    </footer>
  );
}
