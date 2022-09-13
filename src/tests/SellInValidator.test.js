import SellInValidator from "../Validators/SellInValidator";


describe("SellInValidator tests", () => {
    test("validate method correct sellIn to 0", () => {
        let product = {sellIn: -5};
        SellInValidator.validate(product);
        expect(product.sellIn).toEqual(0); 
    });
})