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
}