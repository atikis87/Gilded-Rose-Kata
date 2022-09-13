import Validator from './Validator'

export default class SellInValidator extends Validator{
    static validate(obj){
        if(obj.sellIn < 0) obj.sellIn = 0;    
    }
}