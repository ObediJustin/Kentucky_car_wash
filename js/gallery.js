document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
  const filterButtons = Array.from(document.querySelectorAll(".filter-btn"));
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = document.querySelector(".lightbox img");
  const lightboxCaption = document.querySelector(".lightbox figcaption");
  const lightboxClose = document.querySelector(".lightbox .close");
  const lightboxPrev = document.querySelector(".lightbox .prev");
  const lightboxNext = document.querySelector(".lightbox .next");
  let currentIndex = 0;

  if (!galleryItems.length) return;

  const visibleItems = () => galleryItems.filter((item) => item.style.display !== "none");

  const setFilter = (filter, activeButton) => {
    filterButtons.forEach((button) => button.classList.toggle("active", button === activeButton));
    galleryItems.forEach((item) => {
      item.style.display = filter === "all" || item.dataset.category === filter ? "" : "none";
    });
  };

  const openLightbox = (item) => {
    if (!lightbox || !lightboxImg) return;
    const items = visibleItems();
    currentIndex = Math.max(0, items.indexOf(item));
    const img = item.querySelector("img");
    const caption = item.querySelector(".gallery-caption");
    if (!img) return;
    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = img.alt || "";
    if (lightboxCaption) lightboxCaption.textContent = caption ? caption.textContent : "";
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (lightboxClose) lightboxClose.focus();
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  const moveLightbox = (direction) => {
    const items = visibleItems();
    if (!items.length) return;
    currentIndex = (currentIndex + direction + items.length) % items.length;
    openLightbox(items[currentIndex]);
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => setFilter(button.dataset.filter || "all", button));
  });

  galleryItems.forEach((item) => {
    if (!item.hasAttribute("type")) item.setAttribute("type", "button");
    item.addEventListener("click", () => openLightbox(item));
  });

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener("click", () => moveLightbox(-1));
  if (lightboxNext) lightboxNext.addEventListener("click", () => moveLightbox(1));
  if (lightbox) lightbox.addEventListener("click", (event) => { if (event.target === lightbox) closeLightbox(); });

  document.addEventListener("keydown", (event) => {
    if (!lightbox || !lightbox.classList.contains("open")) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") moveLightbox(-1);
    if (event.key === "ArrowRight") moveLightbox(1);
  });
});
