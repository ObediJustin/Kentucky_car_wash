import React from 'react';
import { Download, X, Sparkles } from 'lucide-react';
import { CAR_WASH_INFO } from '../../data/carWashData';

export default function PwaInstaller({ deferredPrompt, installPwa, dismissPwa }) {
  if (!deferredPrompt) return null;

  return (
    <div className="pwa-banner">
      <div style={{
        width: '44px',
        height: '44px',
        borderRadius: 'var(--radius-sm)',
        background: 'var(--primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        color: '#0A0F1D'
      }}>
        <Sparkles size={24} />
      </div>

      <div style={{ flex: 1 }}>
        <h4 style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0 }}>
          Installer {CAR_WASH_INFO.name}
        </h4>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0.2rem 0 0 0' }}>
          Accès rapide et consultation hors ligne sur votre téléphone.
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <button className="btn btn-primary btn-sm" onClick={installPwa} style={{ padding: '0.5rem 0.85rem', fontSize: '0.85rem' }}>
          <Download size={14} />
          <span>Installer</span>
        </button>
        <button onClick={dismissPwa} aria-label="Fermer" style={{ background: 'transparent', border: 'none', color: 'var(--text-dim)', cursor: 'pointer' }}>
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
