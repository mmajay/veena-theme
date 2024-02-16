class ProductCard extends HTMLElement {
  constructor() {
    super();

    console.log("custom")
    
  }
}

customeElements.define("product-card", ProductCard)