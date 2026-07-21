document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const isOpen = item.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

const backTop = document.getElementById("backTop");
if (backTop) {
  const setBackTop = () => backTop.classList.toggle("visible", window.scrollY > 500);
  setBackTop();
  window.addEventListener("scroll", setBackTop, { passive: true });
  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}
