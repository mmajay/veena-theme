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

    this.variantData = JSON.parse(this.querySelector("script").textContent);
    this.addEventListener("mouseover", this.onLabelHover.bind(this));
  }

  onLabelHover(event) {
    if (event.target.tagName.toLowerCase() !== 'label') return;

    const hoveredInput = event.target.querySelector('input[type="radio"]');
    if (!hoveredInput) return;
    const hoveredValue = hoveredInput.value;

    const selectedInputs = this.querySelectorAll('input[type="radio"]:checked');
    this.selectedOptions = Array.from(selectedInputs, (input) => input.value);

    const index = this.selectedOptions.findIndex(value => value === hoveredValue);
    if (index !== -1) {
      this.selectedOptions[index] = hoveredValue;
    }

    this.currentVariant = this.variantData.find(
      (item) =>
        JSON.stringify(item.options) === JSON.stringify(this.selectedOptions)
    );

    console.log('Hovered value:', hoveredValue);
    console.log('Selected options:', this.selectedOptions);
    console.log('Current variant:', this.currentVariant);

    this.getUpdatedCard();
  }

  getUpdatedCard() {
    console.log('Section ID:', this.sectionId);
    const url = `/products/${this.productHandle}?variant=${this.currentVariant.id}&section_id=${this.sectionId}`;
    console.log('Fetch URL:', url);

    fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        const html = new DOMParser().parseFromString(responseText, "text/html");
        const updatedContent = html.querySelector(
          `[data-product-handle="${this.productHandle}"]`
        ).innerHTML;
        console.log('Updated content:', updatedContent);
        this.innerHTML = updatedContent;
      })
      .catch(error => console.error('Fetch error:', error));
  }
}

customElements.define("product-card", ProductCard);