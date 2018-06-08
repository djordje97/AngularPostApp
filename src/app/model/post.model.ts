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
}