// Burger menu toggle functionality
function initBurgerMenu() {
  const burgerBtn = document.querySelector('.header__burger-btn');
  const mobileMenu = document.querySelector('.header__mobile-menu');
  
  if (burgerBtn && mobileMenu) {
    // Remove existing listeners to prevent duplicates
    const newBurgerBtn = burgerBtn.cloneNode(true);
    burgerBtn.parentNode.replaceChild(newBurgerBtn, burgerBtn);
    
    // Initialize menu as hidden
    mobileMenu.setAttribute('aria-hidden', 'true');
    newBurgerBtn.setAttribute('aria-expanded', 'false');
    
    newBurgerBtn.addEventListener('click', function() {
      const isExpanded = newBurgerBtn.getAttribute('aria-expanded') === 'true';
      
      // Toggle aria-expanded
      newBurgerBtn.setAttribute('aria-expanded', !isExpanded);
      
      // Toggle aria-hidden on mobile menu
      mobileMenu.setAttribute('aria-hidden', isExpanded);
      
      // Prevent body scroll when menu is open
      if (!isExpanded) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
    
    // Close menu when clicking on a link
    const menuLinks = mobileMenu.querySelectorAll('.header__menu-link, .header__socials-link, .header__banner-contact-link');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        newBurgerBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInside = mobileMenu.contains(event.target) || newBurgerBtn.contains(event.target);
      
      if (!isClickInside && mobileMenu.getAttribute('aria-hidden') === 'false') {
        newBurgerBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initBurgerMenu);

// Re-initialize after HTMX swaps content (for dynamic content loading)
document.body.addEventListener('htmx:afterSwap', function(event) {
  if (event.target.classList.contains('header__nav') || event.target.closest('.header__nav')) {
    initBurgerMenu();
  }
});