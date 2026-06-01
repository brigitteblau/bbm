import Navbar from "@/components/Navbar";
import "@/app/globals.css";

export default function HelpPage() {
  return (
    <div style={{ width: "100%" }}>
      <Navbar />
      <div className="hero-block">
        <span className="video-label">VIDEO</span>
      </div>
      <div className="content-blocks">
        <div className="content-block" />
        <div className="content-block" />
        <div className="content-block faq">
          <span className="faq-label">FAQ</span>
        </div>
        <div className="content-block" />
        <div className="content-block" />
        <div className="content-block" />
      </div>
      <div className="footer">
        <span className="footer-label">FOOTER</span>
      </div>
    </div>
  );
}