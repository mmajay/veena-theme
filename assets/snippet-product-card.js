// class ProductCard extends HTMLElement {
//   constructor() {
//     super();
//     this.productHandle = this.dataset.productHandle;
//     this.sectionId = this.dataset.sectionId;

//     this.variantData = JSON.parse(this.querySelector('script').textContent)

//     this.addEventListener('change',this.onVariantChange)

//   }

//   async onVariantChange(){
//     this.selectedOptions = Array.from(this.querySelectorAll('input[type=radio]:checked'), input => input.value)
//     this.currentVariant = this.variantData.find(item => JSON.stringify(item.options) == JSON.stringify(this.selectedOptions))
      
//       this.getUpdatedCard();
//     }
  
//     getUpdatedCard() {
//       const url = `/products/${this.productHandle}?variant=${this.currentVariant.id}&section_id=${this.sectionId}`;
  
//       fetch(url)
//         .then((response) => response.text())
//         .then((responseText) => {
//           const html = new DOMParser().parseFromString(responseText, "text/html");
//           this.innerHTML = html.querySelector(`[data-product-handle="${this.productHandle}"]`).innerHTML;
//         });
//     }

// }

// customElements.define("product-card", ProductCard)


class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.productHandle = this.dataset.productHandle;
    this.sectionId = this.dataset.sectionId;

    this.variantData = JSON.parse(this.querySelector('script').textContent)

    this.labelEl = this.querySelector("#mylabel")
    
      this.labelEl.addEventListener('mouseover', ()=>{
        console.log(this.labelEl.dataset.optionValue)
        console.log(this.labelEl.dataset.productCard)
        console.log(this.variantData)
        
        this.currentVariant = this.variantData.find(item => item.title === this.labelEl.dataset.optionValue)
        console.log(this.currentVariant)
        // this.getUpdatedCard();
            // const url = `/products/${this.productHandle}?variant=${this.currentVariant.id}&section_id=${this.sectionId}`;
  
      // fetch(url)
      //   .then((response) => response.text())
      //   .then((responseText) => {
      //     const html = new DOMParser().parseFromString(responseText, "text/html");
      //     this.innerHTML = html.querySelector(`[data-product-handle="${this.productHandle}"]`).innerHTML;
      //   });
        
      })
      
 

  }


}

customElements.define("product-card", ProductCard)