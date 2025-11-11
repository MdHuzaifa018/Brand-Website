import { useState } from 'react';
import './Services.css';

function Services() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      title: 'Brand Strategy',
      description: 'Market positioning, competitive analysis, brand architecture, and strategic roadmaps that define your path to market leadership.'
    },
    {
      title: 'Identity Design',
      description: 'Visual systems that capture essence and communicate value—logo design, typography, color systems, and brand guidelines.'
    },
    {
      title: 'Copywriting',
      description: 'Messaging frameworks, taglines, brand voice development, and editorial content that speaks with clarity and conviction.'
    },
    {
      title: 'Market Intelligence',
      description: 'Consumer insights, trend analysis, competitive intelligence, and strategic research that informs every decision.'
    }
  ];

  return (
    <section id="services" className="services">
      <h2 className="section-title">What We Do</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card ${activeService === index ? 'active' : ''}`}
            onMouseEnter={() => setActiveService(index)}
            onMouseLeave={() => setActiveService(null)}
          >
            <h3 className="service-title">{service.title}</h3>
            <div className="service-description">
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="services-cta">
        <a href="/services-deck.pdf" className="deck-link" target="_blank">
          View Full Services Deck →
        </a>
      </div>
    </section>
  );
}

export default Services;

