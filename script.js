// Navbar shadow on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

// Mobile menu
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// Scroll reveal — set up inside load so GitHub Pages doesn't race
window.addEventListener('load', () => {
  // Hero elements visible immediately
  document.querySelectorAll('#hero .reveal-up').forEach(el => el.classList.add('visible'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

  // Fallback: if anything is still invisible after 1.5s, force show it
  setTimeout(() => {
    document.querySelectorAll('.reveal-up:not(.visible)').forEach(el => el.classList.add('visible'));
  }, 1500);
});

// Active nav link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 130) current = s.id; });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--blue-md)' : '';
  });
});

// Contact form
function handleSubmit(e) {
  e.preventDefault();
  const note = document.getElementById('formNote');
  note.textContent = '✓ Mensaje enviado. Te respondo pronto.';
  e.target.reset();
  setTimeout(() => { note.textContent = ''; }, 5000);
}
