import { initBurgerMenu } from './burger-menu.js';

function initComponents() {
  initBurgerMenu();
}
function init() {
  import("./index.about-section.js");
  import("./index.limited-edition.js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]',
).length;
let loadedPartialsCount = 0;

document.addEventListener('DOMContentLoaded', initComponents);
document.body.addEventListener('htmx:afterSwap', initComponents);
document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
