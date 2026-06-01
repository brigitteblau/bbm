import Navbar from "@/components/Navbar";
import "@/app/globals.css";

export default function ContactPage() {
  return (
    <div style={{ maxWidth: 420, margin: "0 auto" }}>
      <Navbar />
      <div className="contact-hero">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
      <div className="contact-info">
        <span>INFO NUESTRA Y DE CONTACTO</span>
      </div>
      <div className="footer">
        <span className="footer-label">FOOTER</span>
      </div>
    </div>
  );
}