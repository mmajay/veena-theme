console.log("jay")

class CustomSlider extends HTMLElement {
  constructor() {
    super();
    this.splideEl = this.querySelector(".splide");
    this.mountSplider();
  }

  mountSplider() {
    new Splide(this.splideEl).mount();
  }
}

customElements.define("custom-slider", CustomSlider);