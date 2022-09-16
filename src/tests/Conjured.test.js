import Cojured from "../Products/Conjured";

describe("Cojured tests", () => {
  test("Quality and sellIn prop is valid", () => {
    let cojured = new Cojured(10, 15);
    let expectCojured = { quality: 10, sellIn: 15, title: "" };
    expect(cojured).toEqual(expectCojured);
  });

  let changeQualityCases = [
    {
      quality: 10,
      sellIn: 5,
      expectedQuality: 8,
    },
    {
      quality: 10,
      sellIn: 0,
      expectedQuality: 6,
    },
    {
      quality: 55,
      sellIn: 5,
      expectedQuality: 48,
    },
  ];
  describe.each(changeQualityCases)(
    "changeQuality behaviour with different quality",
    (qualityCase) => {
      test(`changeQuality with quality=${qualityCase.quality} and sellIn=${qualityCase.sellIn} should have quality=${qualityCase.expectedQuality}`, () => {
        let cojured = new Cojured(qualityCase.quality, qualityCase.sellIn);
        cojured.changeQuality();
        expect(cojured.quality).toEqual(qualityCase.expectedQuality);
      });
    }
  );
});
