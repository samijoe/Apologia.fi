// Mobile nav toggle
const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.textContent = isOpen ? 'X' : '≡';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.textContent = '≡';
    });
  });
}

// Subtle reveal-on-scroll for sections
const revealTargets = document.querySelectorAll('[data-reveal]');

if ('IntersectionObserver' in window && revealTargets.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(el => observer.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('is-visible'));
}

// Contact form: mailto fallback (no backend on GitHub Pages)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    if (email) {
      window.location.href = `mailto:hello@apologia.fi?subject=Liity postituslistalle&body=Lisää ${encodeURIComponent(email)} Apologian postituslistalle.`;
    }
  });
}
