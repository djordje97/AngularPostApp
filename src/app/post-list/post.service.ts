import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Post } from "../model/post.model";
import { Observable } from "rxjs";

const httpOptions= {
    header: new  HttpHeaders({'Content-Type':'application/json'})
};
@Injectable()
export class PostService{

    private url='/api/posts';
    constructor(private http: HttpClient){}

     getAllPosts(){
        return this.http.get<Post[]>(this.url);
    }

}