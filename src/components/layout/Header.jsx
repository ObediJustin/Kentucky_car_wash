import React, { useState, useEffect } from 'react';
import { CAR_WASH_INFO } from '../../data/carWashData';
import { Phone, Mail, MapPin, MessageCircle, Menu, X, Download } from 'lucide-react';

export default function Header({ activeSection, setActiveSection, deferredPrompt, installPwa }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'why-us', label: 'Pourquoi nous' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Galerie' },
    { id: 'pricing', label: 'Tarifs' },
    { id: 'testimonials', label: 'Avis' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-meta">
            <span className="top-meta-item"><MapPin size={14} className="text-primary" /> {CAR_WASH_INFO.address}</span>
            <span className="top-meta-item"><Phone size={14} className="text-primary" /> {CAR_WASH_INFO.phone}</span>
            <span className="top-meta-item"><Mail size={14} className="text-primary" /> {CAR_WASH_INFO.email}</span>
          </div>
          <div className="social-links">
            <a href={CAR_WASH_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="container header-main">
        <a href="#home" className="brand-logo" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
          <img src={CAR_WASH_INFO.logo} alt={CAR_WASH_INFO.name} />
          <div className="brand-name">
            Kentucky <span>Car Wash</span>
          </div>
        </a>

        <nav>
          <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          {deferredPrompt && (
            <button className="btn btn-secondary btn-sm" onClick={installPwa} aria-label="Installer l'application">
              <Download size={16} />
              <span>Installer App</span>
            </button>
          )}
          <a href={`tel:${CAR_WASH_INFO.phoneRaw}`} className="btn btn-primary">
            <Phone size={16} />
            <span>Appeler</span>
          </a>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
