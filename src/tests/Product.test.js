import Product from "../Products/Product.js";

describe("Product tests", () => {
  test("Quality and sellIn prop is valid", () => {
    let product = new Product(10, 15);
    let expectObj = { quality: 10, sellIn: 15, title: "" };
    expect(product).toEqual(expectObj);
  });

  let changeQualityCases = [
    {
      quality: 10,
      sellIn: 5,
      expectedQuality: 9,
    },
    {
      quality: 10,
      sellIn: 0,
      expectedQuality: 8,
    },
    {
      quality: 55,
      sellIn: 5,
      expectedQuality: 49,
    },
  ];
  describe.each(changeQualityCases)(
    "changeQuality behaviour with different quality",
    (qualityCase) => {
      test(`changeQuality with quality=${qualityCase.quality} and sellIn=${qualityCase.sellIn} should have quality=${qualityCase.expectedQuality}`, () => {
        let product = new Product(qualityCase.quality, qualityCase.sellIn);
        product.changeQuality();
        expect(product.quality).toEqual(qualityCase.expectedQuality);
      });
    }
  );

  let changeSellInCases = [
    {
      quality: 10,
      sellIn: 5,
      expectedSellIn: 4,
    },
    {
      quality: 10,
      sellIn: 0,
      expectedSellIn: 0,
    },
  ];
  describe.each(changeSellInCases)(
    "changeSellIn behaviour with different sellIn",
    (sellInCase) => {
      test(`changeSellIn with quality=${sellInCase.quality} and sellIn=${sellInCase.sellIn} should have sellIn=${sellInCase.expectedSellIn}`, () => {
        let product = new Product(sellInCase.quality, sellInCase.sellIn);
        product.changeSellIn();
        expect(product.sellIn).toEqual(sellInCase.expectedSellIn);
      });
    }
  );

  let nextDayChangeCases = [
    {
      quality: 10,
      sellIn: 5,
      expectedQuality: 9,
      expectedSellIn: 4,
    },
    {
      quality: 10,
      sellIn: 0,
      expectedQuality: 8,
      expectedSellIn: 0,
    },
    {
      quality: 100,
      sellIn: 0,
      expectedQuality: 48,
      expectedSellIn: 0,
    },
    {
      quality: 0,
      sellIn: 5,
      expectedQuality: 0,
      expectedSellIn: 4,
    },
  ];
  describe.each(nextDayChangeCases)(
    "nextDayChange behaviour with different quality and sellIn",
    (props) => {
      test(`changeSellIn with quality=${props.quality} and sellIn=${props.sellIn} should have sellIn=${props.expectedSellIn} and quality=${props.expectedQuality}`, () => {
        let product = new Product(props.quality, props.sellIn);
        product.nextDayChange();
        expect(product).toEqual({
          quality: props.expectedQuality,
          sellIn: props.expectedSellIn,
          title: "",
        });
      });
    }
  );
});
