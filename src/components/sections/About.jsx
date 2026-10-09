import React from 'react';
import { CAR_WASH_INFO } from '../../data/carWashData';
import { CheckCircle2, ShieldAlert } from 'lucide-react';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <div className="glass-card" style={{ padding: '0.5rem', borderRadius: 'var(--radius-lg)' }}>
            <img
              src="/images/service_auto.jpg"
              alt="Lavage de carrosserie automobile haute pression chez Kentucky Car Wash"
              style={{ width: '100%', borderRadius: 'var(--radius-md)', display: 'block', objectFit: 'cover', height: '380px' }}
            />
          </div>
          <div className="glass-card" style={{
            position: 'absolute',
            bottom: '-2rem',
            right: '-1rem',
            padding: '1.25rem',
            maxWidth: '260px',
            border: '1px solid var(--primary)',
            background: 'var(--bg-canvas)'
          }}>
            <h4 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>100%</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Engagement Propreté & Intégrité du véhicule</p>
          </div>
        </div>

        <div>
          <span className="eyebrow">À Propos de Nous</span>
          <h2>Bien plus qu'un simple lavage.</h2>
          <p style={{ fontSize: '1.1rem', margin: '1.25rem 0', color: 'var(--text-muted)', lineHeight: '1.7' }}>
            Situé à Kihisi sur la Route Aéroport (à côté de la station African Oil), <strong>{CAR_WASH_INFO.name}</strong> élève le lavage automobile au rang de véritable soin d'exception.
          </p>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.75rem', lineHeight: '1.7' }}>
            Nous croyons que chaque véhicule — qu'il s'agisse d'une citadine, d'une moto ou d'un camion d'entreprise — reflète l'exigence de son propriétaire. Nous allions équipements performants, dégraissants haute efficacité et attention méticuleuse portée à chaque détail.
          </p>

          <ul className="check-list">
            <li>
              <CheckCircle2 size={20} />
              <span><strong>Accueil personnalisé & convivial :</strong> Une prise en charge claire et adaptée à votre besoin direct.</span>
            </li>
            <li>
              <CheckCircle2 size={20} />
              <span><strong>Polyvalence complète :</strong> Formules sur mesure pour voitures, deux-roues et véhicules de transport.</span>
            </li>
            <li>
              <CheckCircle2 size={20} />
              <span><strong>Finition brillante sans rayures :</strong> Séchage microfibre et protection déperlante longue durée.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
