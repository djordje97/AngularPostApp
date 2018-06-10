import { User } from "./user.model";
import { Post } from "./post.model";

export class Comment{
    public _id: number;
    public _title: string;
    public _description: string;
    public _date:Date;
    public _likes: number;
    public _dislikes: number;
    public _user:User;
    public _post: Post;

    constructor(){
    }

    
    get id() : number {
        return this._id;
    }
    set id(theId : number) {
        this._id= theId;
    }

    get title() : string {
        return this._title;
    }
    set title(theTitle : string) {
        this._title= theTitle;
    }

    get description() : string {
        return this._description;
    }
    set description(theDescription : string) {
        this._description= theDescription;
    }

    get date() : Date {
        return this._date;
    }
    set date(theDate : Date) {
        this._date= theDate;
    }
    
    get likes() : number {
        return this._likes;
    }
    set likes(theLikes : number) {
        this._likes= theLikes;
    }
    
    get dislikes() : number {
        return this._dislikes;
    }
    set dislikes(theDislikes : number) {
        this._likes= theDislikes;
    }

    get user() : User {
        return this._user;
    }
    set user(theUser : User) {
        this._user= theUser;
    }

    get post() : Post {
        return this._post;
    }
    set post(thePost : Post) {
        this._post= thePost;
    }
}