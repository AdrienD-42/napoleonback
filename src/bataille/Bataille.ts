
export  class Bataille {
constructor(
    public id : Number ,
    public nom : String ,
    public date : Date ,
    public victoire : Boolean ,
    public img : String,
    public descritpion : Description
) {


}


}
export class Description {
    constructor(
        public datelieu : String ,
        public forcesPresentes : String ,
        public situationsGenerale : String
    ) {}
}