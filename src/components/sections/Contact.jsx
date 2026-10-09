import React, { useState } from 'react';
import { CAR_WASH_INFO } from '../../data/carWashData';
import { Phone, Mail, MapPin, MessageCircle, Send, Globe, Map } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Bonjour Kentucky Car Wash,\n\nNom: ${formData.name}\nTéléphone: ${formData.phone}\nEmail: ${formData.email}\nVéhicule: ${formData.vehicle}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${CAR_WASH_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="section section-soft" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Nous Contacter</span>
          <h2>Votre véhicule mérite un nouveau départ.</h2>
          <p>Confiez-nous votre véhicule ou prenez contact directement avec notre équipe.</p>
        </div>

        <div className="contact-grid">
          <div>
            <div className="glass-card contact-card">
              <div className="contact-icon">
                <Phone size={22} />
              </div>
              <div>
                <h4 style={{ color: 'var(--text-main)', fontSize: '1.05rem', margin: 0 }}>Téléphone Direct</h4>
                <a href={`tel:${CAR_WASH_INFO.phoneRaw}`} style={{ color: 'var(--primary)', fontSize: '1.1rem', fontWeight: '600' }}>
                  {CAR_WASH_INFO.phone}
                </a>
              </div>
            </div>

            <div className="glass-card contact-card">
              <div className="contact-icon" style={{ background: 'rgba(37, 211, 102, 0.15)', borderColor: '#25D366', color: '#25D366' }}>
                <MessageCircle size={22} />
              </div>
              <div>
                <h4 style={{ color: 'var(--text-main)', fontSize: '1.05rem', margin: 0 }}>WhatsApp Officiel</h4>
                <a href={CAR_WASH_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontSize: '1rem', fontWeight: '600' }}>
                  Écrire sur WhatsApp instantané
                </a>
              </div>
            </div>

            <div className="glass-card contact-card">
              <div className="contact-icon">
                <Mail size={22} />
              </div>
              <div>
                <h4 style={{ color: 'var(--text-main)', fontSize: '1.05rem', margin: 0 }}>E-mail Professionnel</h4>
                <a href={`mailto:${CAR_WASH_INFO.email}`} style={{ color: 'var(--primary)', fontSize: '0.95rem' }}>
                  {CAR_WASH_INFO.email}
                </a>
              </div>
            </div>

            <div className="glass-card contact-card">
              <div className="contact-icon">
                <MapPin size={22} />
              </div>
              <div>
                <h4 style={{ color: 'var(--text-main)', fontSize: '1.05rem', margin: 0 }}>Adresse & Localisation</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0 }}>
                  {CAR_WASH_INFO.address}
                </p>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem', marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Map size={28} style={{ color: 'var(--primary)', flexShrink: 0 }} />
              <div>
                <strong style={{ color: 'var(--text-main)', display: 'block' }}>Renseignements Pratiques</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', margin: 0 }}>
                  Situé sur l'axe principal Route Aéroport Kihisi, facilement repérable à côté de African Oil.
                </p>
              </div>
            </div>
          </div>

          <form className="glass-card contact-form" onSubmit={handleSubmit}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
              Demande d'Information ou Devis
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Remplissez ce formulaire pour envoyer votre demande directement sur WhatsApp.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label htmlFor="name">Nom complet *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-control"
                  required
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Téléphone *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="form-control"
                  required
                  placeholder="+243 ..."
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Adresse E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                placeholder="votre.email@exemple.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="vehicle">Type de Véhicule *</label>
              <input
                id="vehicle"
                name="vehicle"
                type="text"
                className="form-control"
                required
                placeholder="Voiture, Moto, Camion..."
                value={formData.vehicle}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message ou Précisions *</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                required
                placeholder="Expliquez le service souhaité ou vos questions..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-whatsapp" style={{ width: '100%', marginTop: '0.5rem' }}>
              <Send size={18} />
              <span>Envoyer ma demande sur WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
