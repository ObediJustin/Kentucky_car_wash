import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../../data/carWashData';
import GalleryModal from '../common/GalleryModal';
import { Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section className="section section-soft" id="gallery">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Galerie Photo</span>
          <h2>Découvrez nos réalisations en images.</h2>
          <p>Aperçu de la qualité de nettoyage et de la finition apportée à chaque véhicule.</p>
        </div>

        <div className="gallery-filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Tous les Véhicules
          </button>
          <button
            className={`filter-btn ${filter === 'auto' ? 'active' : ''}`}
            onClick={() => setFilter('auto')}
          >
            Automobiles
          </button>
          <button
            className={`filter-btn ${filter === 'moto' ? 'active' : ''}`}
            onClick={() => setFilter('moto')}
          >
            Deux-Roues
          </button>
          <button
            className={`filter-btn ${filter === 'camion' ? 'active' : ''}`}
            onClick={() => setFilter('camion')}
          >
            Poids Lourds
          </button>
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => setSelectedImage(item)}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="gallery-overlay">
                <span style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase' }}>
                  {item.categoryLabel}
                </span>
                <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF', margin: '0.2rem 0 0.4rem 0' }}>
                  {item.title}
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  <Maximize2 size={14} />
                  <span>Agrandir</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <GalleryModal
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        images={filteredItems}
      />
    </section>
  );
}
