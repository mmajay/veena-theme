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


// class ProductCard extends HTMLElement {
//   constructor() {
//     super();
//     this.productHandle = this.dataset.productHandle;
//     this.sectionId = this.dataset.sectionId;

//     this.variantData = JSON.parse(this.querySelector('script').textContent)

//     this.labelEl = this.querySelectorAll(".product-card__swatch")
//     this.labelEl.forEach(each => {
//       each.addEventListener('mouseover', ()=>{
//         console.log(each.dataset.optionValue)
//         console.log(each.dataset.productCard)
//         console.log(this.variantData)
        
//         this.currentVariant = this.variantData.find(item => item.title === each.dataset.optionValue)
//         console.log(this.currentVariant)
//         // this.getUpdatedCard();
//             const url = `/products/${this.productHandle}?variant=${this.currentVariant.id}&section_id=${this.sectionId}`;

//         fetch(url)
//   .then((response) => response.text())
//   .then((responseText) => {
//     const html = new DOMParser().parseFromString(responseText, "text/html");

//     // Update the content of the product-card custom element
//     const updatedContent = html.querySelector(`[data-product-handle="${this.productHandle}"]`).innerHTML;
//     this.innerHTML = updatedContent;

//     // Reattach event listeners to the swatch elements
//     this.labelEl = this.querySelectorAll(".product-card__swatch");
//     this.labelEl.forEach(each => {
//       each.addEventListener('mouseover', () => {
//         // Your mouseover logic
//       });
//     });
//   });

  
//       // fetch(url)
//       //   .then((response) => response.text())
//       //   .then((responseText) => {
//       //     const html = new DOMParser().parseFromString(responseText, "text/html");
//       //     this.innerHTML = html.querySelector(`[data-product-handle="${this.productHandle}"]`).innerHTML;
//       //   });

//       })
      
//     } )

//   }

// }

// customElements.define("product-card", ProductCard)











class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.productHandle = this.dataset.productHandle;
    this.sectionId = this.dataset.sectionId;

    // Bind the event listener function to retain its reference
    this.handleSwatchMouseover = this.handleSwatchMouseover.bind(this);

    this.variantData = JSON.parse(this.querySelector('script').textContent);

    this.attachEventListeners();
  }

  attachEventListeners() {
    // Find all swatch elements and attach mouseover event listeners to them
    this.labelEl = this.querySelectorAll(".product-card__swatch");
    this.labelEl.forEach(each => {
      each.addEventListener('mouseover', this.handleSwatchMouseover);
    });
  }

  handleSwatchMouseover(event) {
    const swatch = event.target;
    const optionValue = swatch.dataset.optionValue;

    // Find the corresponding variant data based on the option value
    this.currentVariant = this.variantData.find(item => item.title === optionValue);

    // Fetch the updated content and replace the current content with it
    const url = `/products/${this.productHandle}?variant=${this.currentVariant.id}&section_id=${this.sectionId}`;
    fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        const html = new DOMParser().parseFromString(responseText, "text/html");
        this.innerHTML = html.querySelector(`[data-product-handle="${this.productHandle}"]`).innerHTML;

        // Reattach event listeners after updating content
        this.attachEventListeners();
      });
  }
}

customElements.define("product-card", ProductCard);








