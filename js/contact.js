const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const status = contactForm.querySelector(".form-status");
    if (status) {
      status.textContent = "Ce formulaire est une maquette statique. Pour une reponse rapide, utilisez WhatsApp ou l'appel direct.";
    }
  });
}
