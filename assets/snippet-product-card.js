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

    console.log("started");
    // Get the value associated with the hovered label
    const hoveredValue = event.target.querySelector('input[type="radio"]').value;

    // Get values of all selected options
    this.selectedOptions = Array.from(
      this.querySelectorAll('input[type="radio"]:checked'),
      (input) => input.value
    );

    // Update the hovered input value in selectedOptions array
    const indexOfHoveredValue = this.selectedOptions.indexOf(hoveredValue);
    if (indexOfHoveredValue !== -1) {
      this.selectedOptions[indexOfHoveredValue] = hoveredValue;
    } else {
      this.selectedOptions.push(hoveredValue);
    }

    // Find the corresponding variant based on selected options
    this.currentVariant = this.variantData.find(
      (item) =>
        JSON.stringify(item.options) === JSON.stringify(this.selectedOptions)
    );

    this.getUpdatedCard();
  }

  getUpdatedCard() {
    console.log(this.sectionId);
    const url = `/products/${this.productHandle}?variant=${this.currentVariant.id}&section_id=${this.sectionId}`;

    fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        const html = new DOMParser().parseFromString(responseText, "text/html");
        this.innerHTML = html.querySelector(
          `[data-product-handle="${this.productHandle}"]`
        ).innerHTML;
      });
    console.log("fetched");
  }
}

customElements.define("product-card", ProductCard);
