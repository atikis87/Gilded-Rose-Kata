import LegendaryItem from "./LegendaryItem";

export default class Sulfuras extends LegendaryItem {
  constructor(quality, sellIn, title = "") {
    super(quality, sellIn);
    this.quality = 80;
  }

  nextDayChange() {}
}
