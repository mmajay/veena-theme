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
    // Add event listener to handle label hover
    this.addEventListener("mouseover", this.onLabelHover.bind(this));
  }

  onLabelHover(event) {
    // Check if the hovered element is a label
    if (event.target.tagName.toLowerCase() !== 'label') return;

    // Get the value associated with the hovered label
    const hoveredInput = event.target.querySelector('input[type="radio"]');
    if (!hoveredInput) return;
    const hoveredValue = hoveredInput.value;
    console.log('Hovered value:', hoveredValue);

    // Get values of all selected options
    const selectedInputs = this.querySelectorAll('input[type="radio"]:checked');
    this.selectedOptions = Array.from(selectedInputs, (input) => input.value);
    console.log('Selected options:', this.selectedOptions);

    // Update the hovered input value in selectedOptions array
    const index = this.selectedOptions.findIndex(value => value === hoveredValue);
    if (index !== -1) {
      this.selectedOptions[index] = hoveredValue;
    }
    console.log('Updated selected options:', this.selectedOptions);

    // Find the corresponding variant based on selected options
    this.currentVariant = this.variantData.find(
      (item) =>
        JSON.stringify(item.options) === JSON.stringify(this.selectedOptions)
    );
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
    console.log("Fetched");
  }
}

customElements.define("product-card", ProductCard);
