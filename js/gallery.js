// ===== GALERIE LIGHTBOX =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeLightbox = document.getElementById('lightboxClose');

if (lightbox && lightboxImg && closeLightbox) {
  // Ouvrir la lightbox
  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Fermer la lightbox
  const closeLB = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  closeLightbox.addEventListener('click', closeLB);
  
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLB();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLB();
  });
}