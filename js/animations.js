document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".faq-question").forEach((button) => {
    const item = button.closest(".faq-item");
    if (!item) return;

    button.addEventListener("click", () => {
      const isOpen = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });

    button.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      button.click();
    });
  });

  const backTop = document.getElementById("backTop");
  if (backTop) {
    const setBackTop = () => backTop.classList.toggle("visible", window.scrollY > 500);
    setBackTop();
    window.addEventListener("scroll", setBackTop, { passive: true });
    backTop.addEventListener("click", () => {
      history.pushState(null, "", "#home");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
