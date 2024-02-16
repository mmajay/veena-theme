class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.varientHandle = this.dataset.productHandle;
    this.sectionId = this.dataset.sectionId;
    
    this.productDetails = JSON.parse(this.querySelector('script').textContent)
    this.addEventListener('change',this.onVariantChange)
    console.log(this.productDetails)
  }

  onVariantChange (){
    console.log("")
  }

  

  


}

customElements.define("product-card", ProductCard)