(() => {
  function initCatalog(root = document) {
    const listElement = root.querySelector(".catalog__list");
    const navElement = root.querySelector(".catalog__nav");

    if (!listElement || !navElement) return;

    if (navElement.dataset.catalogInited === "1") return;
    navElement.dataset.catalogInited = "1";

    const watches = [
      { name: "Aureus Chronograph", price: 185.5, img: "./img/aures-watch.png", type: "Mechanical", sale: null },
      { name: "Lunar Horizon", price: 190.0, img: "./img/lunar-watch.png", type: "Mechanical", sale: null },
      { name: "Midnight Meridian", price: 200.0, img: "./img/midnight-watch.png", type: "Mechanical", sale: { oldPrice: 250.0, tag: "Sale" } },
      { name: "Veyra Atlas", price: 145.5, img: "./img/veyra-watch.png", type: "Mechanical", sale: null },

      { name: "Celestia Chronos", price: 299.0, img: "./img/celestia-watch.png", type: "Quartz", sale: null },
      { name: "Kaelith Voyage", price: 245.0, img: "./img/kaelith-watch.png", type: "Quartz", sale: { tag: "Bestseller" } },
      { name: "Tempora Edge", price: 159.99, img: "./img/tempora-watch.png", type: "Quartz", sale: null },
      { name: "Titan Edge", price: 350.5, img: "./img/titan-watch.png", type: "Quartz", sale: null },

      { name: "Aether Pulse", price: 190.0, img: "./img/aether-watch.png", type: "Automatic", sale: null },
      { name: "Noctis Flow", price: 250.0, img: "./img/noctis-watch.png", type: "Automatic", sale: { tag: "Limited" } },
      { name: "Sapphire Orbit", price: 295.9, img: "./img/sapphire-watch.png", type: "Automatic", sale: null },
      { name: "Velour Time", price: 345.0, img: "./img/velour-watch.png", type: "Automatic", sale: null },
    ];

    const formatPrice = (n) => `$${Number(n).toFixed(2)}USD`;

    const createItemMarkup = (product) => {
      const tag = product.sale?.tag ?? null;
      const oldPrice = product.sale?.oldPrice ?? null;

      const saleTagMarkup = tag
        ? `
          <div class="catalog__list-item-link-sale-tag">
            <p>${tag}</p>
          </div>
        `
        : "";

      const priceMarkup = oldPrice != null
        ? `
          <p>
            <span>${formatPrice(oldPrice)}</span>
            ${formatPrice(product.price)}
          </p>
        `
        : `<p>${formatPrice(product.price)}</p>`;

      return `
        <li class="catalog__list-item">
          <a class="catalog__list-item-link" href="#">
            <div>
              <img src="${product.img}" alt="${product.name} watch">
              ${saleTagMarkup}
            </div>
            <h3>${product.name}</h3>
          </a>
          ${priceMarkup}
          <button type="button">Buy Now</button>
        </li>
      `;
    };

    const renderItems = (items) => {
      listElement.innerHTML = items.map(createItemMarkup).join("");
    };

    const setActiveButton = (btn) => {
      navElement.querySelectorAll("button").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      const navRect = navElement.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();

      const left = btnRect.left - navRect.left;
      const width = btnRect.width;

      navElement.style.setProperty("--indicator-left", `${left}px`);
      navElement.style.setProperty("--indicator-width", `${width}px`);
    };

    const renderByType = (type) => {
      renderItems(watches.filter((w) => w.type === type));
    };

    navElement.addEventListener("click", (event) => {
      const currentButton = event.target.closest("button");
      if (!currentButton) return;

      const type = currentButton.textContent.trim();

      setActiveButton(currentButton);
      renderByType(type);
    });

    const defaultButton = navElement.querySelector("button");
    if (defaultButton) {
      setActiveButton(defaultButton);
      renderByType(defaultButton.textContent.trim());
    }

    window.addEventListener("resize", () => {
      const active = navElement.querySelector("button.is-active");
      if (active) setActiveButton(active);
    });
  }

  initCatalog(document);

  document.body.addEventListener("htmx:load", (e) => {
    initCatalog(e.target);
  });
})();
