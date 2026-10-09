import React from 'react';
import { CAR_WASH_INFO } from '../../data/carWashData';
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, Download } from 'lucide-react';

export default function Footer({ deferredPrompt, installPwa }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="footer">
      <div className="container footer-grid">
        <div>
          <a href="#home" className="brand-logo" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>
            <img src={CAR_WASH_INFO.logo} alt={CAR_WASH_INFO.name} style={{ height: '40px' }} />
            <div className="brand-name">
              Kentucky <span>Car Wash</span>
            </div>
          </a>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            {CAR_WASH_INFO.slogan}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontSize: '0.85rem' }}>
            <ShieldCheck size={16} />
            <span>Service Premium & Satisfaction Garantie</span>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1.25rem', color: 'var(--text-main)' }}>Navigation</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <li><a href="#home" className="footer-link">Accueil</a></li>
            <li><a href="#about" className="footer-link">À propos</a></li>
            <li><a href="#services" className="footer-link">Services</a></li>
            <li><a href="#gallery" className="footer-link">Galerie</a></li>
            <li><a href="#contact" className="footer-link">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1.25rem', color: 'var(--text-main)' }}>Prestations</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', color: 'var(--text-muted)' }}>
            <li>Lavage Haute Pression Automobile</li>
            <li>Lavage Mousse Active Moto</li>
            <li>Nettoyage Châssis Camion</li>
            <li>Soin Habitacle & Finition Hydrophobe</li>
          </ul>
        </div>

        <div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1.25rem', color: 'var(--text-main)' }}>Contact & Accès</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.95rem' }}>
            <li style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
              <MapPin size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
              <span>{CAR_WASH_INFO.address}</span>
            </li>
            <li style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
              <Phone size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
              <a href={`tel:${CAR_WASH_INFO.phoneRaw}`}>{CAR_WASH_INFO.phone}</a>
            </li>
            <li style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
              <Mail size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
              <a href={`mailto:${CAR_WASH_INFO.email}`}>{CAR_WASH_INFO.email}</a>
            </li>
          </ul>
          {deferredPrompt && (
            <button className="btn btn-secondary" onClick={installPwa} style={{ marginTop: '1.5rem', width: '100%' }}>
              <Download size={16} />
              <span>Installer PWA App</span>
            </button>
          )}
        </div>
      </div>

      <div className="container footer-bottom">
        <span>&copy; {year} {CAR_WASH_INFO.name}. Tous droits réservés.</span>
        <span>{CAR_WASH_INFO.website}</span>
      </div>
    </footer>
  );
}
