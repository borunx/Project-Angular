export class User {

    #_username:string;
    #_password:string;
    #_email:string;
    #_marital_status:string;
    #_gender:string;
    #_information:string;
    #_role:string;

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
        this.#_username=username;
        this.#_password=password;
        this.#_email=email;
        this.#_marital_status=marital_status;
        this.#_gender=gender;
        this.#_information=information;
        this.#_role=role;
    }

    //getters
    public get username(){
        return this.#_username;
    }

    public get password(){
        return this.#_password;
    }

    public get email(){
        return this.#_email;
    }

    public get marital_status(){
        return this.#_marital_status;
    }

    public get gender(){
        return this.#_gender;
    }

    public get information(){
        return this.#_information;
    }

    public get role(){
        return this.#_role;
    }


    //setters
    public set username(value:string){
        this.#_username = value;
    }

    public set password(value:string){
        this.#_password = value;
    }

    public set email(value:string){
        this.#_email = value;
    }

    public set marital_status(value:string){
        this.#_marital_status = value;
    }

    public set gender(value:string){
        this.#_gender = value;
    }

    public set information(value:string){
        this.#_information = value;
    }

    public set role(value:string){
        this.#_role = value;
    }
    
}
