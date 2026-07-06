// ===== FORMULAIRE DE CONTACT =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Récupération des données
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    
    // Validation basique
    if (!data['Nom complet'] || !data['Email'] || !data['Votre message...']) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    
    // Simulation d'envoi
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i data-lucide="loader"></i> Envoi en cours...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      alert('✅ Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
      this.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      lucide.createIcons();
    }, 1500);
  });
}

// ===== ANNÉE COPYRIGHT =====
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}