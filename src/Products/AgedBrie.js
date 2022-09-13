import Product from "./Product";

export default class AgedBrie extends Product {
  constructor(quality, sellIn, title = "") {
    super(quality, sellIn, title);
  }

  changeQuality() {
    this.quality = this.sellIn > 0 ? (this.quality += 1) : (this.quality += 2);
  }

  changeSellIn() {}
}
