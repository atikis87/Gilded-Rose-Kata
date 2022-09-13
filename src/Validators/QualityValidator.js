import Validator from './Validator'

export default class QualityValidator extends Validator{

    static validate(obj){
        if(obj.quality > 50) obj.quality = 50;
        else if(obj.quality < 0) obj.quality = 0;
    }
}