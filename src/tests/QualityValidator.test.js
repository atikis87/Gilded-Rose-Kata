import QualityValidator from "../Validators/QualityValidator";
import Sulfuras from "../Products/Sulfuras";
import Product from "../Products/Product";

describe("QualityValidator tests", () => {
    let validateTestCases = [
        {
            quality: 55,
            sellIn: 10, 
            expectedQuality: 50
        },
        {
            quality: -1,
            sellIn: 10, 
            expectedQuality: 0
        },
        {
            quality: 20,
            sellIn: 10, 
            expectedQuality: 20
        },
    ]

    describe.each(validateTestCases)("validate method with different quality values", (testCase) => {
        test(`validate method correct quality from ${testCase.quality} to ${testCase.expectedQuality}`, () => {
            let product = new Product(testCase.quality,testCase.sellIn);
            QualityValidator.validate(product);
            expect(product.quality).toEqual(testCase.expectedQuality);
        })
    })
})