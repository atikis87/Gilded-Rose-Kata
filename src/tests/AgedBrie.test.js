import AgedBrie from "../Products/AgedBrie";

describe("AgedBrie tests", () => {
  test("Quality and sellIn prop is valid", () => {
    let product = new AgedBrie(10, 15);
    let expectObj = { quality: 10, sellIn: 15, title: "" };
    expect(product).toEqual(expectObj);
  });

  test("nextDayChange method should increase quality and shouldn't decrease sellIn", () => {
    let agedBrie = new AgedBrie(15, 10);
    let expectedAgedBrie = { quality: 16, sellIn: 10, title: "" };

    agedBrie.nextDayChange();

    expect(agedBrie).toEqual(expectedAgedBrie);
  });

  let changeQualityCases = [
    {
      quality: 10,
      sellIn: 5,
      expectedQuality: 11,
      expectedSellIn: 5,
    },
    {
      quality: 10,
      sellIn: 0,
      expectedQuality: 12,
      expectedSellIn: 0,
    },
    {
      quality: 50,
      sellIn: 5,
      expectedQuality: 51,
      expectedSellIn: 5,
    },
  ];

  describe.each(changeQualityCases)(
    "changeQuality behaviour with different quality",
    (qualityCase) => {
      test(`changeQuality with quality=${qualityCase.quality} and sellIn=${qualityCase.sellIn} should have quality=${qualityCase.expectedQuality} and sellIn=${qualityCase.expectedSellIn}`, () => {
        let agedBrie = new AgedBrie(qualityCase.quality, qualityCase.sellIn);
        let expectedAgedBrie = {
          quality: qualityCase.expectedQuality,
          sellIn: qualityCase.expectedSellIn,
          title: "",
        };
        agedBrie.changeQuality();
        expect(agedBrie).toEqual(expectedAgedBrie);
      });
    }
  );
});
