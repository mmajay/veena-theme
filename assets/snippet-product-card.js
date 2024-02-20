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

    this.labelEl = this.querySelectorAll(".product-card__swatch")
    this.labelEl.forEach(each => {
      each.addEventListener('mouseover', ()=>{
        console.log(each.dataset.optionValue)
        console.log(each.dataset.productCard)
        console.log(this.variantData)
        
        this.currentVariant = this.variantData.find(item => item.title === each.dataset.optionValue)
        console.log(this.currentVariant)
        // this.getUpdatedCard();
            const url = `/products/${this.productHandle}?variant=${this.currentVariant.id}&section_id=${this.sectionId}`;
  
      // fetch(url)
      //   .then((response) => response.text())
      //   .then((responseText) => {
      //     const html = new DOMParser().parseFromString(responseText, "text/html");
      //     this.innerHTML = html.querySelector(`[data-product-handle="${this.productHandle}"]`).innerHTML;
      //   });

        fetch(url)
  .then((response) => response.text())
  .then((responseText) => {
    const html = new DOMParser().parseFromString(responseText, "text/html");

    // Update product image section
    const productImageSection = html.querySelector('.product-card__image');
    const currentProductImageSection = this.querySelector('.product-card__image');
    currentProductImageSection.innerHTML = productImageSection.innerHTML;

    // Update product title section
    const productTitleSection = html.querySelector('.product-card__link');
    const currentProductTitleSection = this.querySelector('.product-card__link');
    currentProductTitleSection.innerHTML = productTitleSection.innerHTML;

    // Update product price section
    const productPriceSection = html.querySelector('.product-card__prices');
    const currentProductPriceSection = this.querySelector('.product-card__prices');
    currentProductPriceSection.innerHTML = productPriceSection.innerHTML;

    // Other sections can be updated similarly

    // Ensure any necessary event listeners are still attached after updating content
    // You might need to reattach event listeners if they were removed during the update
  });

        
      })
      
    } )

  }

}

customElements.define("product-card", ProductCard)