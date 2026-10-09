import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryModal({ selectedImage, setSelectedImage, images }) {
  if (!selectedImage) return null;

  const currentIndex = images.findIndex((img) => img.id === selectedImage.id);

  const handlePrev = (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(10, 15, 29, 0.95)',
        backdropFilter: 'blur(20px)',
        zIndex: 100000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}
      onClick={() => setSelectedImage(null)}
    >
      <button
        onClick={() => setSelectedImage(null)}
        style={{
          position: 'absolute',
          top: '2rem',
          right: '2rem',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#FFFFFF',
          borderRadius: '50%',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
        aria-label="Fermer"
      >
        <X size={24} />
      </button>

      <button
        onClick={handlePrev}
        style={{
          position: 'absolute',
          left: '2rem',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#FFFFFF',
          borderRadius: '50%',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
        aria-label="Précédent"
      >
        <ChevronLeft size={28} />
      </button>

      <div style={{ maxWidth: '900px', width: '100%', textAlign: 'center' }} onClick={(e) => e.stopPropagation()}>
        <img
          src={selectedImage.image}
          alt={selectedImage.title}
          style={{
            width: '100%',
            maxHeight: '75vh',
            objectFit: 'contain',
            borderRadius: 'var(--radius-md)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8)'
          }}
        />
        <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>{selectedImage.title}</h3>
          <p style={{ color: 'var(--primary)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
            {selectedImage.categoryLabel}
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
            {selectedImage.description}
          </p>
        </div>
      </div>

      <button
        onClick={handleNext}
        style={{
          position: 'absolute',
          right: '2rem',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#FFFFFF',
          borderRadius: '50%',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
        aria-label="Suivant"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}
