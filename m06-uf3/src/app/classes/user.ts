export class User {

    #username:string;
    #password:string;
    #email:string;
    #marital_status:string;
    #gender:string;
    #information:string;
    #role:string;

    constructor(
        username:string,
        password:string,
        email:string,
        marital_status:string,
        gender:string,
        information:string,
        role:string,
    )
    {
        this.#username=username;
        this.#password=password;
        this.#email=email;
        this.#marital_status=marital_status;
        this.#gender=gender;
        this.#information=information;
        this.#role=role;
    }

    //getters
    public get username(){
        return this.#username;
    }

    public get password(){
        return this.#password;
    }

    public get email(){
        return this.#email;
    }

    public get marital_status(){
        return this.#marital_status;
    }

    public get gender(){
        return this.#gender;
    }

    public get information(){
        return this.#information;
    }

    public get role(){
        return this.#role;
    }


    //setters
    public set username(value:string){
        this.#username = value;
    }

    public set password(value:string){
        this.#password = value;
    }

    public set email(value:string){
        this.#email = value;
    }

    public set marital_status(value:string){
        this.#marital_status = value;
    }

    public set gender(value:string){
        this.#gender = value;
    }

    public set information(value:string){
        this.#information = value;
    }

    public set role(value:string){
        this.#role = value;
    }
    
}
