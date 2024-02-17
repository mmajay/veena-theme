class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.productHandle = this.dataset.productHandle;
    this.sectionId = this.dataset.sectionId;

    this.productDetails = JSON.parse(this.querySelector('script').textContent)
    this.addEventListener('change',this.onVariantChange)

  }

  async onVariantChange(){
    this.selectedOptions = Array.from(this.querySelectorAll('input[type=radio]:checked'), input => input.value)
    this.currentVarient = this.productDetails.find(eachItem => JSON.stringify())
  }
}

customElements.define("product-card", ProductCard)