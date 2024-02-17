class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.productHandle = this.dataset.productHandle;
    this.sectionId = this.dataset.sectionId;
    
    this.productDetails = JSON.parse(this.querySelector('script').textContent)
    this.addEventListener('change',this.onVariantChange)
    
    // console.log(this.productDetails)
  }

   async onVariantChange(){
    // console.log("sjfg dbm")
    this.selectedOptions = Array.from(this.querySelectorAll('input[type="radio"]:checked'), input => input.value);
    console.log(this.selectedOptions)
    console.log(this.productDetails)
    this.varientValues = this.productDetails.variants.find(item=> JSON.stringify(item.options) == JSON.stringify(this.selectedOptions))
    // this.currentVariant =  this.varientValues == JSON.stringify(this.selectedOptions)
    console.log(this.varientValues)
    const url = `/products/${this.productHandle}?variant=${this.varientValues.id}&section_id=${this.sectionId}`;
    const data = await response.text()
    console.log(data,"data")
    const html = new DOMParser().parseFromString(data, "text/html");
    this.innerHTML = html.querySelector(`[data-product-handle="${this.productHandle}"]`).innerHTML;
  }


}

customElements.define("product-card", ProductCard)