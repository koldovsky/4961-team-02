// Liulyk Mariana

function initRareTimepiecesCarousel() {
  const carousel = document.querySelector(".rare-timepieces__carousel");
  console.log("INIT carousel:", carousel);

  if (!carousel) return;

  const items = [...carousel.querySelectorAll(".rare-timepieces__item")];
  const nextBtn = carousel.querySelector(".rare-timepieces__control--next");
  const prevBtn = carousel.querySelector(".rare-timepieces__control--prev");

  let currentIndex = 0;
  const isMobile = () => window.innerWidth < 768;

  const update = () => {
    console.log("UPDATE", currentIndex, isMobile());
    items.forEach((item, i) => {
      item.hidden = isMobile() && i !== currentIndex;
    });
  };

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    update();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    update();
  });

  window.addEventListener("resize", update);
  update();
}

initRareTimepiecesCarousel();

document.body.addEventListener("htmx:afterOnLoad", () => {
  initRareTimepiecesCarousel();
});