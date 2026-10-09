import React from 'react';
import { CAR_WASH_INFO } from '../../data/carWashData';
import { Sparkles, ShieldCheck, Clock, MessageCircle, Phone, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay" />
      <div className="container">
        <div className="hero-content">
          <span className="eyebrow">
            <Sparkles size={16} /> Le Soin Automobile d'Exception
          </span>

          <h1>
            Redonnez à votre véhicule <br />
            <span className="text-gradient">l'éclat qu'il mérite.</span>
          </h1>

          <p style={{ fontSize: '1.2rem', marginTop: '1.5rem', color: '#CBD5E1', lineHeight: '1.7' }}>
            Chez <strong>Kentucky Car Wash</strong>, chaque détail compte. Lavage haute précision, mousse active hydrofuge et soin méticuleux pour voitures, motos et poids lourds à Kihisi.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2.25rem' }}>
            <a
              href={CAR_WASH_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={18} />
              <span>Réservation WhatsApp</span>
            </a>

            <a href={`tel:${CAR_WASH_INFO.phoneRaw}`} className="btn btn-secondary">
              <Phone size={18} />
              <span>Appeler le +243 892 821 544</span>
            </a>

            <a href="#services" className="btn btn-outline">
              <span>Nos Services</span>
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="hero-badges">
            <div className="hero-badge-item">
              <Sparkles size={20} />
              <div>
                <strong style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>Résultat Impeccable</strong>
                <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>Finition miroir hydrofuge</div>
              </div>
            </div>

            <div className="hero-badge-item">
              <ShieldCheck size={20} />
              <div>
                <strong style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>Shampoings Neutres</strong>
                <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>Protection peinture & carrosserie</div>
              </div>
            </div>

            <div className="hero-badge-item">
              <Clock size={20} />
              <div>
                <strong style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>Service Rapide</strong>
                <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>Efficacité & rigueur à Kihisi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
