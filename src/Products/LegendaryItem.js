import Product from "./Product";

export default class LegendaryItem extends Product {
  constructor(quality, sellIn, title = "") {
    super(quality, sellIn, title);
  }
}
