// ============ NAVBAR SCROLL ============
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

// ============ MOBILE MENU ============
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ============ ACCORDIONS (FAQ + Troubleshooting) ============
document.querySelectorAll('.acc-item').forEach(item => {
  const q = item.querySelector('.acc-q');
  const a = item.querySelector('.acc-a');
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    // close siblings within the same accordion group
    item.parentElement.querySelectorAll('.acc-item.open').forEach(o => {
      o.classList.remove('open');
      o.querySelector('.acc-a').style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add('open');
      a.style.maxHeight = a.scrollHeight + 'px';
    }
  });
});

// ============ SCROLL REVEAL ============
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ============ ACTIVE NAV LINK ============
const sections = ['why', 'guide', 'safety', 'versions', 'faq'];
const linkMap = {};
document.querySelectorAll('.nav-links a').forEach(a => {
  linkMap[a.getAttribute('href').slice(1)] = a;
});
const secIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      const link = linkMap[e.target.id];
      if (link) link.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(id => {
  const s = document.getElementById(id);
  if (s) secIO.observe(s);
});
