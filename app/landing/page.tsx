import Navbar from "@/components/Navbar";
import "@/app/globals.css";

export default function LandingPage() {
  return (
    <div style={{ maxWidth: 420, margin: "0 auto" }}>
      <Navbar />
      <div className="landing-section1">Section 1</div>
      <div className="landing-hero">
        <button className="demo-btn">DEMO</button>
      </div>
      <div className="footer">
        <span className="footer-label">FOOTER</span>
      </div>
    </div>
  );
}