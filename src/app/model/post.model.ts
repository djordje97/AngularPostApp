import { User } from "./user.model";

export class Post{
    public id: number;
    public title: string;
    public description: string;
    public date: Date;
    public likes: number;
    public dislike: number;
    public photo: Blob;
    public longitude: number;
    public latitude: number;
    public user: User;

    
    public get idP() : number {
        return this.id;
    }
    
    public set idP(v : number) {
        this.id = v;
    }

        
    public get titleP() : string {
        return this.title;
    }
    
    public set titleP(v : string) {
        this.title = v;
    }
    
         
    public get descriptionP() : string {
        return this.description;
    }
    
    public set descriptionP(v : string) {
        this.description = v;
    }

         
    public get dateP() : Date {
        return this.date;
    }
    
    public set dateP(v : Date) {
        this.date = v;
    }

         
    public get likesP() : number {
        return this.likes;
    }
    
    public set likesP(v : number) {
        this.likes = v;
    }

    public get dislikeP() : number {
        return this.dislike;
    }
    
    public set dislikeP(v : number) {
        this.dislike = v;
    }

    public get photoP() : Blob {
        return this.photo;
    }
    
    public set photoP(v : Blob) {
        this.photo = v;
    }

    public get longitudeP() : number {
        return this.longitude;
    }
    
    public set longitudeP(v : number) {
        this.longitude = v;
    }

    public get latitudeP() : number {
        return this.latitude;
    }
    
    public set latitudeP(v : number) {
        this.latitude = v;
    }

    public get userP() : User {
        return this.user;
    }
    
    public set userP(v : User) {
        this.user = v;
    }
}