import "../styles/nav.css";

function Navbar() {
  return (
    <div className="navContainer">
      <nav>

        <img
          className="logo"
          src="/2023 Dodge SRT® _ Explore Charger, Challenger & Durango.jfif"
          alt="Logo"
        />

        <div className="navLinks">
          <a href="#home" className="navBtn">Home</a>
          <a href="#featured" className="navBtn">Featured</a>
          <a href="#about" className="navBtn">About</a>
          <a href="#cars" className="navBtn">Cars</a>
          <a href="#contact" className="navBtn">Contact</a>
        </div>

      </nav>
    </div>
  );
}

export default Navbar;