import React from 'react';
import { SERVICES, CAR_WASH_INFO } from '../../data/carWashData';
import { CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Nos Prestations</span>
          <h2>Un soin sur mesure pour chaque catégorie de véhicule.</h2>
          <p>Des formules adaptées aux exigences des particuliers et des professionnels de Kihisi.</p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service) => (
            <div key={service.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative' }}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-card-img"
                />
                <span className="service-badge">{service.badge}</span>
              </div>

              <div className="service-card-body">
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                  {service.shortDesc}
                </p>

                <div style={{
                  padding: '0.65rem 1rem',
                  background: 'rgba(0, 210, 255, 0.08)',
                  borderRadius: 'var(--radius-sm)',
                  borderLeft: '3px solid var(--primary)',
                  marginBottom: '1.25rem',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.9rem',
                  color: 'var(--primary)',
                  fontWeight: '600'
                }}>
                  {service.priceTag}
                </div>

                <ul className="check-list" style={{ marginBottom: '1.75rem', flex: 1 }}>
                  {service.features.map((feat, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${CAR_WASH_INFO.phoneRaw}?text=${encodeURIComponent(service.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%' }}
                >
                  <MessageCircle size={18} />
                  <span>Demander sur WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
