export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-logo">HUNDA</span>
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">Dashboard</a>
        <a href="/contact">Contact Us</a>
        <a href="/help">Help</a>
      </div>
    </nav>
  );
}