const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const pageContent = document.querySelectorAll('main, footer');
const pageInteractiveElements = document.querySelectorAll('main a, main button, footer a, footer button');

const setMobileMenuState = isOpen => {
  mobileMenu.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  mobileMenu.setAttribute('aria-hidden', String(!isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
  pageContent.forEach(element => {
    element.toggleAttribute('inert', isOpen);
    if (isOpen) {
      element.setAttribute('aria-hidden', 'true');
    } else {
      element.removeAttribute('aria-hidden');
    }
  });
  pageInteractiveElements.forEach(element => {
    if (isOpen) {
      element.dataset.menuTabindex = element.getAttribute('tabindex') ?? '';
      element.setAttribute('tabindex', '-1');
    } else if ('menuTabindex' in element.dataset) {
      const originalTabindex = element.dataset.menuTabindex;
      if (originalTabindex) {
        element.setAttribute('tabindex', originalTabindex);
      } else {
        element.removeAttribute('tabindex');
      }
      delete element.dataset.menuTabindex;
    }
  });
};

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

menuToggle.addEventListener('click', () => {
  setMobileMenuState(!mobileMenu.classList.contains('open'));
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    setMobileMenuState(false);
  });
});

window.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobileMenu.classList.contains('open')) {
    setMobileMenuState(false);
    menuToggle.focus();
  }
});

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
