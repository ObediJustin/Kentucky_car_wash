const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
const filterButtons = Array.from(document.querySelectorAll(".filter-btn"));
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox img");
const lightboxClose = document.querySelector(".lightbox .close");
const lightboxPrev = document.querySelector(".lightbox .prev");
const lightboxNext = document.querySelector(".lightbox .next");
let currentIndex = 0;

const visibleItems = () => galleryItems.filter((item) => item.style.display !== "none");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((btn) => btn.classList.toggle("active", btn === button));
    galleryItems.forEach((item) => {
      item.style.display = filter === "all" || item.dataset.category === filter ? "" : "none";
    });
  });
});

function openLightbox(item) {
  if (!lightbox || !lightboxImg) return;
  const items = visibleItems();
  currentIndex = items.indexOf(item);
  const img = item.querySelector("img");
  lightboxImg.src = img.currentSrc || img.src;
  lightboxImg.alt = img.alt;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function moveLightbox(direction) {
  const items = visibleItems();
  if (!items.length) return;
  currentIndex = (currentIndex + direction + items.length) % items.length;
  openLightbox(items[currentIndex]);
}

galleryItems.forEach((item) => {
  item.addEventListener("click", () => openLightbox(item));
  item.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLightbox(item);
    }
  });
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
