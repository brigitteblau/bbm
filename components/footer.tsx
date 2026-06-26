import { FaTiktok, FaInstagram, FaLinkedinIn } from "react-icons/fa"
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
        <div className="flex flex-col gap-2 items-start gap-6">
          <span className="text-[11px] font-extrabold text-white tracking-widest uppercase mb-1">
            Contacto
          </span>
          <p className="text-[13px] text-white">betterbm26@gmail.com</p>
          <p className="text-[13px] text-white">+54 9 11 7366 7824</p>
        </div>
           {/* Redes sociales */}
          <div className="flex gap-3 mt-4 ml-auto">
            {/* TikTok */}
            <a href="#" className="w-9 h-9 rounded-full bg-black flex items-center justify-center hover:opacity-70">
             <FaTiktok size={16} color="white" />
            </a>
            {/* Instagram */}
            <a href="#" className="w-9 h-9 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] flex items-center justify-center hover:opacity-70">
             <FaInstagram size={16} color="white" />
            </a>
            {/* LinkedIn */}

            <a href="#" className="w-9 h-9 rounded-full bg-[#0077b5] flex items-center justify-center hover:opacity-70">
             <FaLinkedinIn size={16} color="white" />
            </a>
          </div>
        </div>

      {/* Copyright */}
      <div className="mt-10 text-right text-[12px] text-white">
        © 2026 hunda. – Todos los derechos reservados
      </div>
    </footer>
  );
}
