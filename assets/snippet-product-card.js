class ProductCard extends HTMLElement {
  constructor() {
    super();

    console.log("custom")
    
  }
}

customElements.define("product-card", ProductCard)