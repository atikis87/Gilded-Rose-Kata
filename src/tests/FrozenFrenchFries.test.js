import FrozenFrenchFries from "../Products/FrozenFrenchFries";

describe("FrozenFrenchFries tests", () => {
  test("Quality and sellIn prop is valid", () => {
    let frozenFrenchFries = new FrozenFrenchFries(10, 15);
    let expectObj = { quality: 10, sellIn: 365, title: "" };
    expect(frozenFrenchFries).toEqual(expectObj);
  });

  test("thaw method should set sellIn to 1", () => {
    let frozenFrenchFries = new FrozenFrenchFries(10, 15);
    let expectObj = { quality: 10, sellIn: 1, title: "" };
    frozenFrenchFries.thaw();
    expect(frozenFrenchFries).toEqual(expectObj);
  });

  test("changeQuality method should set quality to 0 if sellIn === 0", () => {
    let frozenFrenchFries = new FrozenFrenchFries(10, 10);
    let expectObj = { quality: 0, sellIn: 0, title: "" };
    frozenFrenchFries.sellIn = 0;
    frozenFrenchFries.changeQuality();
    expect(frozenFrenchFries).toEqual(expectObj);
  });
});
