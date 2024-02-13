class CustomSlider extends HTMLElement {
  constructor() {
    super();
    this.splideEl = this.querySelector(".splide");
    this.options = JSON.parse(this.querySelector("script").textContent);
    console.log(this.options)
    this.mountSplider();
  }

  mountSplider() {
    new Splide(this.splideEl).mount();
  }
}

customElements.define("custom-slider", CustomSlider);