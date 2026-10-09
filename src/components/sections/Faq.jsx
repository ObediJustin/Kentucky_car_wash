import React, { useState } from 'react';
import { FAQ_ITEMS } from '../../data/carWashData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Foire Aux Questions</span>
          <h2>Tout ce qu'il faut savoir avant de nous visiter.</h2>
          <p>Réponses aux questions fréquemment posées par nos clients à Kihisi.</p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-card"
                style={{
                  padding: '1.25rem 1.75rem',
                  border: isOpen ? '1px solid var(--primary)' : '1px solid var(--border-glass)',
                  cursor: 'pointer'
                }}
                onClick={() => toggleFaq(index)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <HelpCircle size={20} style={{ color: isOpen ? 'var(--primary)' : 'var(--text-dim)', flexShrink: 0 }} />
                    <h3 style={{ fontSize: '1.1rem', color: isOpen ? 'var(--primary)' : 'var(--text-main)' }}>
                      {item.question}
                    </h3>
                  </div>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform var(--transition-fast)',
                      color: isOpen ? 'var(--primary)' : 'var(--text-dim)'
                    }}
                  />
                </div>

                {isOpen && (
                  <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-glass)', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
