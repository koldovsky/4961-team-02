// Liulyk Mariana
function initRareTimepiecesCarousel() {
  const carousel = document.querySelector(".rare-timepieces__carousel");
  if (!carousel) return;

  const items = [...carousel.querySelectorAll(".rare-timepieces__item")];
  const nextBtn = carousel.querySelector(".rare-timepieces__control--next");
  const prevBtn = carousel.querySelector(".rare-timepieces__control--prev");

  let currentIndex = 0;

  const isMobile = () => window.innerWidth < 768;
  const isTablet = () => window.innerWidth >= 768 && window.innerWidth < 1024;
  const isDesktop = () => window.innerWidth >= 1024;

  const visibleCount = () => {
    if (isMobile()) return 1;
    if (isTablet()) return 2;
    if (isDesktop()) return 4;
    return 1;
  };

  const stepCount = () => 1;

  const maxIndex = () => Math.max(0, items.length - visibleCount());

  const update = () => {
    const visible = visibleCount();

    items.forEach((item, i) => {
      item.hidden = i < currentIndex || i >= currentIndex + visible;
    });
  };

  const next = () => {
    if (currentIndex >= maxIndex()) {
      currentIndex = 0;
    } else {
      currentIndex += stepCount();
    }
    update();
  };

  const prev = () => {
    if (currentIndex <= 0) {
      currentIndex = maxIndex();
    } else {
      currentIndex -= stepCount();
    }
    update();
  };

  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

  window.addEventListener("resize", () => {
    currentIndex = 0;
    update();
  });

  update();
}

initRareTimepiecesCarousel();
document.body.addEventListener("htmx:afterOnLoad", initRareTimepiecesCarousel);


document.body.addEventListener('click', (e) => {
  const buyBtn = e.target.closest('.watch-card__link');
  if (!buyBtn) return;

  const card = buyBtn.closest('.watch-card');
  const title = card.querySelector('.watch-card__title')?.textContent;

  const overlay = document.querySelector('.cart-overlay');
  overlay.querySelector('.cart__plan').textContent = title;

  overlay.classList.add('cart-overlay--active');
});

document.body.addEventListener('click', (e) => {
  if (
    e.target.closest('.cart__close') ||
    e.target.closest('.cart__ok')
  ) {
    document
      .querySelector('.cart-overlay')
      .classList.remove('cart-overlay--active');
  }
});