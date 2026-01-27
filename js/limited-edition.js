// Liulyk Mariana
(() => {
  const MOBILE_MAX_WIDTH = 768;

  const carousel = document.querySelector(".rare-timepieces__list");
  const prevBtn = document.querySelector(".rare-timepieces__control--prev");
  const nextBtn = document.querySelector(".rare-timepieces__control--next");

  if (!carousel || !prevBtn || !nextBtn) return;

  const isMobile = () => window.innerWidth < MOBILE_MAX_WIDTH;

  const getCardWidth = () => {
    const firstItem = carousel.querySelector(".rare-timepieces__item");
    if (!firstItem) return 0;

    const gap = parseFloat(getComputedStyle(carousel).gap || 0);

    return firstItem.offsetWidth + gap;
  };

  const scrollNext = () => {
    if (!isMobile()) return;
    carousel.scrollBy({
      left: getCardWidth(),
      behavior: "smooth",
    });
  };

  const scrollPrev = () => {
    if (!isMobile()) return;
    carousel.scrollBy({
      left: -getCardWidth(),
      behavior: "smooth",
    });
  };

  nextBtn.addEventListener("click", scrollNext);
  prevBtn.addEventListener("click", scrollPrev);

  // 48rem поки вимикається"
  window.addEventListener("resize", () => {
    if (!isMobile()) {
      carousel.scrollTo({ left: 0 });
    }
  });
})();
