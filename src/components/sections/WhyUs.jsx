import React from 'react';
import { WHY_US_FEATURES } from '../../data/carWashData';
import { Sparkles, ShieldCheck, MessageCircle, MapPin } from 'lucide-react';

const iconMap = {
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  MessageCircle: MessageCircle,
  MapPin: MapPin
};

export default function WhyUs() {
  return (
    <section className="section section-soft" id="why-us">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Pourquoi Nous Choisir</span>
          <h2>Une expérience simple, rapide et rassurante.</h2>
          <p>Découvrez ce qui fait la différence Kentucky Car Wash pour l'entretien régulier de vos véhicules à Kihisi.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          {WHY_US_FEATURES.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div key={index} className="glass-card" style={{ padding: '2rem' }}>
                <div className="contact-icon" style={{ marginBottom: '1.5rem' }}>
                  <IconComponent size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>{item.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
