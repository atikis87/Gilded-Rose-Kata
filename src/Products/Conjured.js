import Product from "./Product";

export default class Conjured extends Product {
  constructor(quality, sellIn, title = "") {
    super(quality, sellIn, title);
  }

  changeQuality() {
    this.quality -= this.sellIn > 0 ? 2 : 4;
  }
}
