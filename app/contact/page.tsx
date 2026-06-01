import Navbar from "@/components/Navbar";
import "@/app/globals.css";

export default function ContactPage() {
  return (
    <div style={{ width: "100%" }}>
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