export class Esdeveniment {

    #_name:string;
    #_type:string;
    #_date:Date;
    #_ubication:string;
    #_price:number;

    constructor(
        name:string,
        type:string,
        date:Date,
        ubication:string,
        price:number
    ) {
        this.#_name      = name;
        this.#_type      = type;
        this.#_date      = date;
        this.#_ubication = ubication;
        this.#_price     = price;
    }

    //getters
    public get name(){
        return this.#_name;
    }

    public get type(){
        return this.#_type;
    }

    public get date(){
        return this.#_date;
    }

    public get ubication(){
        return this.#_ubication;
    }

    public get price(){
        return this.#_price;
    }


    //setters
    public set name(value:string){

        if(value.length <= 50){
            this.#_name = value;
        }
    }

    public set type(value:string){
        this.#_type = value;
    }

    public set date(value:Date){
        this.#_date = value;
    }

    public set ubication(value:string){
        this.#_ubication = value;
    }

    public set price(value:number){
        this.#_price = value;
    }
    
}
