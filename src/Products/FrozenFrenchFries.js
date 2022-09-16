import Product from "./Product";

export default class FrozenFrenchFries extends Product {
  constructor(quality, sellIn, title = "") {
    super(quality, sellIn, title);
    this.sellIn = 365;
  }

  thaw() {
    if (this.sellIn > 0) this.sellIn = 1;
  }

  changeQuality() {
    if (this.sellIn === 0) this.quality = 0;
  }
}
