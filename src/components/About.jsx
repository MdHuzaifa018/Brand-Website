import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">Who We Are</h2>
          <div className="about-text">
            <p className="lead-text">
              Strategy before execution.<br />
              Substance before noise.
            </p>
            <p>
              We are a collective of strategists, designers, and storytellers 
              who believe that powerful brands are built on clarity, not complexity. 
              Every project begins with insight—deep research into your market, 
              audience, and competitive landscape.
            </p>
            <p>
              From there, we craft identities that resonate, communicate with 
              precision, and position you to lead. We don't chase trends. 
              We create timeless brands with strategic intent.
            </p>
          </div>
        </div>
        <div className="about-image">
          <div className="image-placeholder">
            <span>Brand Studio</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
