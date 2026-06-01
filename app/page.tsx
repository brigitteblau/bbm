import Navbar from "@/components/Navbar";
import "./globals.css";
export default function LandingPage() {
  return (
    <div style={{ width: "100%" }}>
      <Navbar />
      <div className="landing-hero">
        <span className="landing-section1">Section 1</span>
        <button className="demo-btn">DEMO</button>
      </div>
      <div className="footer">
        <span className="footer-label">FOOTER</span>
      </div>
    </div>
  );
}