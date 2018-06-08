export class User{
    public _id: number;
    public _name: string;
    public _username: string;
    public _password: string;
    public _photo: Blob;

    constructor(){
    
    }

    get id():number{
        return this._id;
    }
    set id(theId: number){
        this._id=theId;
    }

    get name():string{
        return this._name;
    }
    set name(theName: string){
        this._name=theName;
    }

    get username():string{
        return this._username;
    }
    set username(theUsername: string){
        this._username=theUsername;
    }

    get password():string{
        return this._password;
    }
    set password(thepassword: string){
        this._password=thepassword;
    }

    get photo():Blob{
        return this._photo;
    }
    set photo(thePhoto: Blob){
        this._photo=thePhoto;
    }
}