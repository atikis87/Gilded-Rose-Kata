import Product from "./Product";

export default class BackstagePasses extends Product {
  constructor(quality, sellIn, title = "") {
    super(quality, sellIn, title);
  }

  changeQuality() {
    if (this.sellIn > 10) this.quality += 1;
    else if (this.sellIn > 5) this.quality += 2;
    else if (this.sellIn > 0) this.quality += 3;
    else this.quality = 0;
  }
}
