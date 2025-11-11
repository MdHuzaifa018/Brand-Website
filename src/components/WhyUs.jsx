import './WhyUs.css';

function WhyUs() {
  const features = [
    'Strategic clarity before creative execution',
    'Data-driven insights that inform every decision',
    'Timeless design over fleeting trends',
    'Direct collaboration with senior strategists'
  ];

  return (
    <section id="why-us" className="why-us">
      <h2 className="section-title">Why Choose Us</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <span className="feature-number">0{index + 1}</span>
            <p className="feature-text">{feature}</p>
          </div>
        ))}
      </div>
      <div className="testimonial">
        <blockquote>
          "They transformed our brand from invisible to inevitable. 
          Strategic, surgical, and utterly unforgettable."
        </blockquote>
        <cite>— Client Name, Company</cite>
      </div>
    </section>
  );
}

export default WhyUs;

