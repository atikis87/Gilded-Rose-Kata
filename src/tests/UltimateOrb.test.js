import UltimateOrb from "../Products/UltimateOrb";

describe("UltimateOrb tests", () => {
  test("Quality and sellIn prop is valid", () => {
    let ultimateOrb = new UltimateOrb(10, 15, "ultimate");
    let expectObj = { quality: 10, sellIn: 15, title: "ultimate" };
    expect(ultimateOrb).toEqual(expectObj);
  });

  test("Quality shouldn't decrease after call changeQuality", () => {
    let ultimateOrb = new UltimateOrb(10, 15, "ultimate");
    let expectObj = { quality: 10, sellIn: 15, title: "ultimate" };
    ultimateOrb.changeQuality();
    expect(ultimateOrb).toEqual(expectObj);
  });
});
