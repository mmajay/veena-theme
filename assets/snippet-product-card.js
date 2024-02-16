class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.varientHandle = this.dataset.productHandle;
    this.sectionId = this.dataset.sectionId;
    this.productDetails = JSON.parse(this.querySelector('script').textContent)
    this.addEventListener('change',this.onVariantChange)
    console.log(this.productDetails)
  }
  
  onVariantChange(){
    this.selectedVariant = this.querySelector('[name='id']').value
    this.getCurrentVariant()
  }
  
  getCurrentVariant() {
    this.currentVariant = this.variantData.find(variant => variant.id == this.selectedVariant);
    console.log('getting the current variant', this.currentVariant)
  }
}

customElements.define("product-card", ProductCard)