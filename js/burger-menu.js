// Burger menu toggle functionality
function initBurgerMenu() {
    const burgerBtn = document.querySelector(
    '[data-js-burger-btn]:not(.is-init)'
    );
    const mobileMenu = document.querySelector('[data-js-mobile-menu]');
  
    if (!burgerBtn || !mobileMenu) return;

    burgerBtn.classList.add('is-init');
    mobileMenu.setAttribute('aria-hidden', 'true');
    
    burgerBtn.addEventListener('click', function() {
      const isExpanded = burgerBtn.getAttribute('aria-expanded') === 'true';
      
      // Toggle aria-expanded
      burgerBtn.setAttribute('aria-expanded', String(!isExpanded));
      
      // Toggle aria-hidden on mobile menu
      mobileMenu.setAttribute('aria-hidden', String(isExpanded));
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = isExpanded ? '' : 'hidden';
    });
    
    // Close menu when clicking on a link
    const menuLinks = mobileMenu.querySelectorAll('.header__menu-link, .header__socials-link, .header__banner-contact-link');
    menuLinks.forEach((link) => {
      link.addEventListener('click', () => {
        burgerBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initBurgerMenu);

// Re-initialize after HTMX swaps content (for dynamic content loading)
document.body.addEventListener('htmx:afterSwap', initBurgerMenu);