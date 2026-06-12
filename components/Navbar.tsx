// components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="bg-[#C5C1C1] h-[70px] flex items-center justify-center px-6 relative">
      <span className="text-[18px] font-bold text-[#111] absolute left-6">
        hunda
      </span>
      <div className="flex gap-8">
        <a href="#" className="text-[13px] text-[#111] no-underline">Home</a>
        <a href="#" className="text-[13px] text-[#111] no-underline">Dashboard</a>
          <a href="/help" className="text-[13px] text-[#111] no-underline">Help</a>
        <a href="/contact" className="text-[13px] text-[#111] no-underline">Contact Us</a>
      </div>
    </nav>
  );
}