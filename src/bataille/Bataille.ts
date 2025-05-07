import {isBoolean, isDate, IsNotEmpty, isNumber, isString, MaxDate, MinDate, ValidateNested} from "class-validator";
import {Type} from "class-transformer";

export  class Bataille {
constructor(
    @isNumber
    @IsNotEmpty()
    public id : Number ,
    @isString
    @IsNotEmpty()
    public lieu: String ,
    @isString
    @IsNotEmpty()
    public nom : String ,
    @isDate
    @IsNotEmpty()
    @Type(() => Date)
    @MinDate(new Date('1769-01-01'))
    @MaxDate(new Date('1821-05-05'))
    public date : Date ,
    @isBoolean
    @IsNotEmpty()
    public victoire : Boolean ,
    @isString
    @IsNotEmpty()
    public img : String,
    @IsNotEmpty()
    @Type(() => Description)
    @ValidateNested()
    public descritpion : Description
) {


}


}
export class Description {
    constructor(
        @isString
        @IsNotEmpty()
        public datelieu : String ,
        @isString
        @IsNotEmpty()
        public forcesPresentes : String ,
        @isString
        @IsNotEmpty()
        public situationsGenerale : String
    ) {}
}