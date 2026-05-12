import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      <img
        className="hero-image"
        src="/Dodge in the snow Wallpaper (1).jfif"
        alt="SRT"
      />

      <div className="hero-overlay">
        <h1>UNLEASH THE DEMON</h1>

        <p>
          American Muscle. Pure SRT Power.
        </p>

        <button>Explore Cars</button>
      </div>

    </section>
  );
}

export default Hero;