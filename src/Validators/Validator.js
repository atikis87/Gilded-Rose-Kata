export default class Validator {
    static checkValidation(obj, callback){
      this.validate(obj);
      callback.call(obj);
      this.validate(obj);
    }
  
    static validate(obj) {
      throw new Error("Implementation doesn't found");
    }
  }
  