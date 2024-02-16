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
    // console.log("sjfg dbm")
    this.selectedOptions = Array.from(this.querySelectorAll('input[type="radio"]:checked'), input => input.value);
    console.log(this.selectedOptions)
    console.log(this.productDetails)
    this.currentVariant = this.productDetails.find(item => JSON.stringify(item.options) == JSON.stringify(this.selectedOptions))
  }

  

  


}

customElements.define("product-card", ProductCard)