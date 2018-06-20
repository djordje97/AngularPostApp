export class User{
    public id: number;
    public name: string;
    public username: string;
    public password: string;
    public photo: Blob;

    constructor(){
    
    }

    get idU():number{
        return this.id;
    }
    set idU(theId: number){
        this.id=theId;
    }

    get nameU():string{
        return this.name;
    }
    set nameU(theName: string){
        this.name=theName;
    }

    get usernameU():string{
        return this.username;
    }
    set usernameU(theUsername: string){
        this.username=theUsername;
    }

    get passwordU():string{
        return this.password;
    }
    set passwordU(thepassword: string){
        this.password=thepassword;
    }

    get photoU():Blob{
        return this.photo;
    }
    set photoU(thePhoto: Blob){
        this.photo=thePhoto;
    }
}