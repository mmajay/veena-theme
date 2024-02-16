class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.varientHandle = this.dataset.productHandle;
    this.sectionId = this.dataset.sectionId;
    this.productDetails = JSON.parse(this.querySelector('script').textContent)
    
    console.log(this.productDetails)
  }
}

customElements.define("product-card", ProductCard)