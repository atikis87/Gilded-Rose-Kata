import GildedRose from "../GildedRose";
import Product from "../Products/Product";
import UltimateOrb from "../Products/UltimateOrb";

describe("GildedRose tests", () => {
  let products;

  beforeEach(() => {
    products = [new Product(10, 10), new Product(10, 10), new Product(10, 10)];
  });

  test("GildedRose object contains products we passed", () => {
    let gildedRose = new GildedRose(products);
    let expectedGildedRose = { products, ultimateProduct: null };
    expect(gildedRose).toEqual(expectedGildedRose);
  });

  test("sellProduct removes product from products", () => {
    let testProduct = new Product(15, 5);
    let gildedRose = new GildedRose([...products, testProduct]);
    let expectedGildedRose = { products, ultimateProduct: null };

    gildedRose.sellProduct(testProduct);

    expect(gildedRose).toEqual(expectedGildedRose);
  });

  test("startNewDay should run nextDayChange methods on each product", () => {
    let gildedRose = new GildedRose(products);
    let expectedGildedRose = {
      products: [new Product(9, 9), new Product(9, 9), new Product(9, 9)],
      ultimateProduct: null,
    };

    gildedRose.startNewDay();

    expect(gildedRose).toEqual(expectedGildedRose);
  });

  test("addProducts should add products to products list", () => {
    let gildedRose = new GildedRose();
    let expectedGildedRose = {
      products: [new Product(10, 10), new Product(10, 10), new Product(10, 10)],
      ultimateProduct: null,
    };

    gildedRose.addProducts(products);

    expect(gildedRose).toEqual(expectedGildedRose);
  });

  test("addProducts should set ultimate product to ultimateProduct", () => {
    let gildedRose = new GildedRose();
    let ultimateProduct = new UltimateOrb(10, 10, "ultimate");

    gildedRose.addProducts([...products, ultimateProduct]);

    expect(gildedRose.ultimateProduct).toEqual(ultimateProduct);
  });

  test("addproducts should leave only one UltimateOrb with title='ultimate'", () => {
    let gildedRose = new GildedRose();
    let ultimateProduct1 = new UltimateOrb(10, 10, "ultimate");
    let ultimateProduct2 = new UltimateOrb(11, 11, "ultimate");

    gildedRose.addProducts([...products, ultimateProduct1, ultimateProduct2]);

    expect(
      gildedRose.products.reduce(
        (curr, next) => (curr += next.title === "ultimate" ? 1 : 0),
        0
      )
    ).toEqual(1);
  });
});
