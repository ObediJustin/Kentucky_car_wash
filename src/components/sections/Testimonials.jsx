import React from 'react';
import { TESTIMONIAL_PLACEHOLDERS } from '../../data/carWashData';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="section section-soft" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Avis Clients</span>
          <h2>La satisfaction de nos conducteurs.</h2>
          <p>Retours d'expérience et témoignages certifiés sur nos prestations de lavage à Kihisi.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {TESTIMONIAL_PLACEHOLDERS.map((t) => (
            <div key={t.id} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={18} fill="var(--accent-gold)" />
                  ))}
                </div>
                <Quote size={28} style={{ color: 'var(--primary)', opacity: 0.4, marginBottom: '0.75rem' }} />
                <p style={{ fontStyle: 'italic', color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: '1.6' }}>
                  "{t.quote}"
                </p>
              </div>

              <div style={{ marginTop: '1.75rem', paddingTop: '1rem', borderTop: '1px solid var(--border-glass)' }}>
                <strong style={{ color: 'var(--text-main)', display: 'block' }}>{t.author}</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--primary)' }}>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
