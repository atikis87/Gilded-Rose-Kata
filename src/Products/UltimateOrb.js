import LegendaryItem from "./LegendaryItem";

export default class UltimateOrb extends LegendaryItem {
  constructor(quality, sellIn, title = "") {
    super(quality, sellIn, title);
  }

  changeQuality() {}
}
