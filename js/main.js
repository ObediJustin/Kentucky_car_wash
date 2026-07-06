// ===== MAIN.JS =====
// Ce fichier regroupe tous les scripts et initialise les fonctionnalités

// Initialisation de Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});

// ===== GESTION DES ERREURS =====
console.log('🚗 Kentucky Car Wash - Site vitrine chargé avec succès');

// ===== PERFORMANCE =====
// Chargement différé des images (Lazy Loading natif)
// Les images utilisent déjà l'attribut loading="lazy"

// ===== ACCESSIBILITÉ =====
// Navigation au clavier pour les éléments interactifs
document.querySelectorAll('.btn, .faq-question, .gallery-item').forEach(el => {
  el.setAttribute('tabindex', '0');
});

// ===== SEO =====
// Ajout automatique de l'année dans le footer
// Déjà géré dans contact.js

// ===== RÉSEAUX SOCIAUX =====
// Les liens vers les réseaux sociaux sont prêts à être configurés
// Modifier les href dans le footer selon les besoins

console.log('✅ Site Kentucky Car Wash prêt');