import Validator from "../Validators/Validator";


describe("Validator tests", () => {
    test("checkValidation should throw an error", () => {
        let product = {}
        expect(() => Validator.checkValidation(product,() => {})).toThrow(new Error("Implementation doesn't found")); 
    });
})