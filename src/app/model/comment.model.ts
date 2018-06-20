import { User } from "./user.model";
import { Post } from "./post.model";

export class Comment{
    public id: number;
    public title: string;
    public description: string;
    public date:Date;
    public likes: number;
    public dislikes: number;
    public user:User;
    public post: Post;

    constructor(){
    }

    
    get idC() : number {
        return this.id;
    }
    set idC(theId : number) {
        this.id= theId;
    }

    get titleC() : string {
        return this.title;
    }
    set titleC(theTitle : string) {
        this.title= theTitle;
    }

    get descriptionC() : string {
        return this.description;
    }
    set descriptionC(theDescription : string) {
        this.description= theDescription;
    }

    get dateC() : Date {
        return this.date;
    }
    set dateC(theDate : Date) {
        this.date= theDate;
    }
    
    get likesC() : number {
        return this.likes;
    }
    set likesC(theLikes : number) {
        this.likes= theLikes;
    }
    
    get dislikesC() : number {
        return this.dislikes;
    }
    set dislikesC(theDislikes : number) {
        this.dislikes= theDislikes;
    }

    get userC() : User {
        return this.user;
    }
    set userC(theUser : User) {
        this.user= theUser;
    }

    get postC() : Post {
        return this.post;
    }
    set postC(thePost : Post) {
        this.post= thePost;
    }
}