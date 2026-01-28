const aboutSection = document.querySelector(".about");
if (aboutSection) {
  const statNumbers = aboutSection.querySelectorAll(".about__stat-number");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          statNumbers.forEach((stat) => {
            animateNumber(stat);
          });
          observer.unobserve(aboutSection);
        }
      });
    },
    { threshold: 0.1 }, // При 10% видимості секції
  );
  observer.observe(aboutSection);
}

function animateNumber(element) {
  const text = element.textContent;
  const target = parseInt(text.replace(/[^\d]/g, ""));
  let current = 0;
  const duration = 1500;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    current = Math.floor(target * progress);
    element.textContent = current + (text.includes("+") ? "+" : "");
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  requestAnimationFrame(update);
}
