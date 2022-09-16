import BackstagePasses from "../Products/BackstagePasses";

describe("BackstagePasses tests", () => {
  test("Quality and sellIn prop is valid", () => {
    let backstagePass = new BackstagePasses(10, 15);
    let expectBackstagePass = { quality: 10, sellIn: 15, title: "" };
    expect(backstagePass).toEqual(expectBackstagePass);
  });

  let changeQualityCases = [
    {
      quality: 10,
      sellIn: 15,
      expectedQuality: 11,
    },
    {
      quality: 10,
      sellIn: 8,
      expectedQuality: 12,
    },
    {
      quality: 10,
      sellIn: 3,
      expectedQuality: 13,
    },
    {
      quality: 10,
      sellIn: 0,
      expectedQuality: 0,
    },
  ];
  describe.each(changeQualityCases)(
    "changeQuality behaviour with different quality and sellIn values",
    (qualityCase) => {
      test(`changeQuality with quality=${qualityCase.quality} and sellIn=${qualityCase.sellIn} should have quality=${qualityCase.expectedQuality}`, () => {
        let backstagePass = new BackstagePasses(
          qualityCase.quality,
          qualityCase.sellIn
        );
        backstagePass.changeQuality();
        expect(backstagePass.quality).toEqual(qualityCase.expectedQuality);
      });
    }
  );
});
