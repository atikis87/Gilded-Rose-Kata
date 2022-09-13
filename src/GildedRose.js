export default class GildedRose {
    constructor(products = []) {
      this.products = [];
      this.ultimateProduct = null;
      this.addProducts(products);
    }
  
    sellProduct(product) {
      this.products = this.products.filter(
        (productFromArray) => productFromArray !== product
      );
    }
  
    startNewDay() {
      this.products.forEach((product) => {
        product.nextDayChange();
      });
    }
  
    addProducts(products) {
      products.forEach((product) => {
        this.products.push(product);
        if (product.title === "ultimate") {
          if (this.ultimateProduct !== null) {
            this.ultimateProduct.title = "";
          }
          this.ultimateProduct = product;
        }
      });
    }
  }
  