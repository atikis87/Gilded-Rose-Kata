import QualityValidator from "../Validators/QualityValidator";
import SellInValidator from "../Validators/QualityValidator";

export default class Product {
  constructor(quality, sellIn, title = "") {
    this.quality = quality > 50 ? 50 : quality;
    this.sellIn = sellIn;
    this.title = title;
  }

  nextDayChange() {
    SellInValidator.checkValidation(this, this.changeSellIn);
    QualityValidator.checkValidation(this, this.changeQuality);
  }

  changeQuality() {
    this.quality -= this.sellIn > 0 ? 1 : 2;
  }

  changeSellIn() {
    if (this.sellIn > 0) this.sellIn -= 1;
  }
}