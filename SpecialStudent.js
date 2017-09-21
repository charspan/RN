import Student from './Student'

export default class SpecialStudent extends Student{
    constructor(){
        super('小米','男',23);
    }
    getDescription(){
        return '继承父类:'+super.getDescription();
    }
}