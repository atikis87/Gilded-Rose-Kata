import Sulfuras from "../Products/Sulfuras";

describe("Sulfuras tests", () => {
  test("Quality and sellIn prop is valid", () => {
    let product = new Sulfuras(10, 15);
    let expectObj = { quality: 80, sellIn: 15, title: "" };
    expect(product).toEqual(expectObj);
  });

  test("nextDayChange method shouldn't change quality and sellIn values", () => {
    let sulfuras = new Sulfuras(10, 0);
    let expectSulfuras = { quality: 80, sellIn: 0, title: "" };
    sulfuras.nextDayChange();
    expect(sulfuras).toEqual(expectSulfuras);
  });
});
