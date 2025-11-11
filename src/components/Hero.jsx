import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          INSIGHT<span className="dot">.</span><br />
          IDENTITY<span className="dot">.</span><br />
          IMPACT<span className="dot">.</span>
        </h1>
        <p className="hero-subtitle">
          Strategy before execution.<br />
          Substance before noise.
        </p>
        <a href="#contact" className="hero-cta">
          Start Your Journey
        </a>
      </div>
      <div className="hero-background"></div>
    </section>
  );
}

export default Hero;
