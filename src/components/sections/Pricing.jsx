import React from 'react';
import { CAR_WASH_INFO } from '../../data/carWashData';
import { Car, Bike, Truck, MessageCircle, HelpCircle } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Tarification Transparente</span>
          <h2>Des tarifs adaptés selon le type de véhicule.</h2>
          <p>Contactez notre équipe par WhatsApp ou téléphone pour obtenir un devis instantané personnalisé.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="glass-card" style={{ padding: '2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="contact-icon" style={{ marginBottom: '1.25rem' }}>
              <Car size={28} />
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Automobile</h3>
            <p style={{ color: 'var(--primary)', fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: '700', margin: '0.5rem 0' }}>
              Sur Devis / Catégorie
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.75rem', textAlign: 'center' }}>
              Berline, SUV, 4x4 ou citadine. Tarif ajusté selon la formule (Extérieur seul ou Complet).
            </p>
            <a
              href={`https://wa.me/${CAR_WASH_INFO.phoneRaw}?text=Bonjour%20Kentucky%20Car%20Wash%2C%20je%20souhaite%20connaitre%20le%20tarif%20pour%20ma%20voiture.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%' }}
            >
              <MessageCircle size={18} />
              <span>Demander le tarif Auto</span>
            </a>
          </div>

          <div className="glass-card" style={{ padding: '2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid var(--primary)' }}>
            <div className="contact-icon" style={{ marginBottom: '1.25rem', background: 'rgba(0,210,255,0.2)' }}>
              <Bike size={28} />
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Deux-Roues</h3>
            <p style={{ color: 'var(--primary)', fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: '700', margin: '0.5rem 0' }}>
              Contactez-nous
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.75rem', textAlign: 'center' }}>
              Soin chaîne, dégraissage moteur et lavage carénage pour moto, scooter ou quad.
            </p>
            <a
              href={`https://wa.me/${CAR_WASH_INFO.phoneRaw}?text=Bonjour%20Kentucky%20Car%20Wash%2C%20je%20souhaite%20connaitre%20le%20tarif%20pour%20ma%20moto.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%' }}
            >
              <MessageCircle size={18} />
              <span>Demander le tarif Moto</span>
            </a>
          </div>

          <div className="glass-card" style={{ padding: '2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="contact-icon" style={{ marginBottom: '1.25rem' }}>
              <Truck size={28} />
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Poids Lourds & Pro</h3>
            <p style={{ color: 'var(--primary)', fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: '700', margin: '0.5rem 0' }}>
              Sur Devis Spécial
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.75rem', textAlign: 'center' }}>
              Prestation calibrée pour camions, bus, remorques et flottes commerciales.
            </p>
            <a
              href={`https://wa.me/${CAR_WASH_INFO.phoneRaw}?text=Bonjour%20Kentucky%20Car%20Wash%2C%20je%20souhaite%20connaitre%20le%20tarif%20pour%20un%20camion.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%' }}
            >
              <MessageCircle size={18} />
              <span>Devis Poids Lourds</span>
            </a>
          </div>
        </div>

        <div style={{
          marginTop: '3rem',
          padding: '1.25rem 1.75rem',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid var(--border-glass)',
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          fontSize: '0.9rem',
          color: 'var(--text-dim)'
        }}>
          <HelpCircle size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
          <span>
            <em>Note d'information :</em> Les tarifs précis sont calculés selon le type exact du véhicule et le niveau d'encrassement. Pour une estimation immédiate, appelez directement le <strong>+243 892 821 544</strong>.
          </span>
        </div>
      </div>
    </section>
  );
}
