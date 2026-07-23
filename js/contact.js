document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const status = contactForm.querySelector(".form-status");
    if (status) {
      status.textContent = "Votre message est valide, mais ce formulaire est statique. Pour l'envoyer réellement, utilisez WhatsApp ou l'appel direct.";
    }
  });
});
