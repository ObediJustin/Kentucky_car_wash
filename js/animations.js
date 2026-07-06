// ===== ANIMATIONS AU SCROLL =====
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { 
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

sections.forEach(s => observer.observe(s));

// ===== COMPTEUR ANIMÉ =====
function animateCounter(element, target, suffix = '') {
  let current = 0;
  const increment = Math.ceil(target / 60);
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = current + suffix;
  }, 30);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      if (id === 'stat1') animateCounter(entry.target, 12500, '+');
      else if (id === 'stat2') animateCounter(entry.target, 98, '%');
      else if (id === 'stat3') animateCounter(entry.target, 8, ' ans');
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.hero-stats .stat h3').forEach(el => {
  if (el.id) statObserver.observe(el);
});

// ===== FAQ ACCORDÉON =====
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    if (item) {
      item.classList.toggle('active');
    }
  });
});

// ===== BACK TO TOP =====
const backTop = document.getElementById('backTop');

if (backTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backTop.classList.add('visible');
    } else {
      backTop.classList.remove('visible');
    }
  });

  backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}