class CustomSlider extends HTMLElement {
  constructor() {
    super();
    this.splideEl = this.querySelector(".splide");
    this.mountSplider();
  }

  mountSplider() {
    new Splide(this.splideEl, {
      perPage: 4,
      gap: "20px",
      pagination: false,
    }).mount();
  }
}

customElements.define("custom-slider", CustomSlider);