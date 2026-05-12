import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CarCard from "./components/CarCard";
import { cars } from "./data/cars";

function App() {
  return (
    <div>

      <Navbar />

      <Hero />
      <section id="home"></section>
      <section id="featured" className="featuredSection">

  <div className="featuredContent">

    <div className="featuredText">
      <h2>Featured Machine</h2>

      <h3>Dodge SRT Demon 170</h3>

      <p>
        The most extreme Dodge performance car ever built.
        Designed for straight-line dominance with brutal acceleration
        and unmatched horsepower.
      </p>

      <ul>
        <li>⚡ 1,000+ Horsepower</li>
        <li>🏁 0–100 km/h in under 2.5s</li>
        <li>🔥 Supercharged V8 Engine</li>
        <li>🏎 Track-optimized performance system</li>
      </ul>

      <button>Explore Specs</button>
    </div>

    <img
      src="/Bold & Badass_ Dodge Challenger SRT Hellcat in Paradise.jfif"
      alt="Featured Car"
    />

  </div>

</section>

<section id="about" className="aboutSection">

  <h2>About SRT</h2>

  <p>
    Street & Racing Technology (SRT) is Dodge’s performance division,
    focused on building high-performance machines engineered for speed,
    power, and aggressive driving dynamics.
  </p>

  <div className="aboutGrid">

    <div className="aboutCard">
      <h3> Performance</h3>
      <p>Built for extreme acceleration and track dominance.</p>
    </div>

    <div className="aboutCard">
      <h3>Engineering</h3>
      <p>Advanced tuning, supercharged engines, precision control.</p>
    </div>

    <div className="aboutCard">
      <h3> Legacy</h3>
      <p>Decades of muscle car evolution and racing heritage.</p>
    </div>

  </div>

</section>
    
      

      <section id="cars" className="carGrid">
        <h2>Our Cars</h2>

        <div className="grid">
          {cars.map((car, index) => (
            <CarCard
              key={index}
              name={car.name}
              hp={car.hp}
              image={car.image}
              onSelect={() => {}}
            />
          ))}
        </div>
      </section>

<section id="contact" className="contactSection">

  <h2>Contact SRT</h2>
  <p className="contactSubtitle">
    Get in touch with our performance team
  </p>

  <div className="contactGrid">

    <div className="contactCard">
      <h3>📞 Phone</h3>
      <p className="contactText">070737945138</p>
    </div>

    <div className="contactCard">
      <h3>📧 Email</h3>
      <p className="contactText">srtcompany@gmail.com</p>
    </div>

    <div className="contactCard">
      <h3>📍 Location</h3>
      <p className="contactText">
        SRT Headquarters<br />
        Detroit Performance District<br />
        United States
      </p>
    </div>

  </div>

</section>
<footer className="footer">

  <div className="footerLeft">
    <h3>SRT Performance</h3>
    <p>Built for speed. Designed for power.</p>
  </div>

  <div className="footerRight">
    <p>© 2026 SRT Company. All rights reserved.</p>
  </div>

</footer>

    </div>

  
  );
}

export default App;