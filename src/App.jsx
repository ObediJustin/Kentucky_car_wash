import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import OfflineNotifier from './components/layout/OfflineNotifier';
import PwaInstaller from './components/layout/PwaInstaller';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import WhyUs from './components/sections/WhyUs';
import Services from './components/sections/Services';
import Gallery from './components/sections/Gallery';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';
import Faq from './components/sections/Faq';
import Contact from './components/sections/Contact';

import { CAR_WASH_INFO } from './data/carWashData';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const sections = ['home', 'about', 'why-us', 'services', 'gallery', 'pricing', 'testimonials', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const installPwa = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
    }
  };

  const dismissPwa = () => {
    setDeferredPrompt(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <OfflineNotifier />
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        deferredPrompt={deferredPrompt}
        installPwa={installPwa}
      />

      <main>
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Gallery />
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      <Footer deferredPrompt={deferredPrompt} installPwa={installPwa} />

      {/* Floating Action Buttons */}
      <div className="float-ctas">
        <a
          href={CAR_WASH_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="float-btn float-whatsapp"
          aria-label="Contacter sur WhatsApp"
          title="Écrire sur WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
        <a
          href={`tel:${CAR_WASH_INFO.phoneRaw}`}
          className="float-btn float-phone"
          aria-label="Appeler Kentucky Car Wash"
          title="Appeler Kentucky Car Wash"
        >
          <Phone size={24} />
        </a>
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="float-btn"
            style={{ background: 'var(--bg-surface-low)', color: 'var(--text-main)', border: '1px solid var(--border-glass)' }}
            aria-label="Retour en haut"
            title="Retour en haut"
          >
            <ArrowUp size={24} />
          </button>
        )}
      </div>

      <PwaInstaller
        deferredPrompt={deferredPrompt}
        installPwa={installPwa}
        dismissPwa={dismissPwa}
      />
    </div>
  );
}
