import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Post } from "../model/post.model";
import { Observable } from "rxjs";
import { Comment } from "../model/comment.model";

var token=localStorage.getItem("token");
var head;
if(token){
head={
    "Authorization": "Bearer " + token,
    'Content-Type': 'application/json'
  };
}else{
    head={
        'Content-Type': 'application/json'
    };
}
const httpOptions= {
    header: new  HttpHeaders(head)
};
@Injectable()
export class PostService{

    private url='/api/posts';
    constructor(private http: HttpClient){}

     getAllPosts(){
        return this.http.get<Post[]>(this.url);
    }

    getPostById(id:number){
        return this.http.get<Post>(this.url+'/'+id);
    }

    getCommentsByPost(postId:number){
        return this.http.get<Comment[]>('/api/comments/post/'+postId);  
    }

    updateComment(commentId:any,comment:any):any{
        var token=localStorage.getItem("token")
        var head;
        if(token){
        head={
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
          };
        }else{
            head={
                'Content-Type': 'application/json'
            };
        }
       let  httpOptions= {
            header: new  HttpHeaders(head)
        };
        return this.http.put('/api/comments/'+commentId,comment,{headers:httpOptions.header});
    }

    updatePost(postId,post):any{
        var token=localStorage.getItem("token")
        var head;
        if(token){
        head={
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
          };
        }else{
            head={
                'Content-Type': 'application/json'
            };
        }
       let  httpOptions= {
            header: new  HttpHeaders(head)
        };
        return this.http.put('/api/posts/'+postId,post,{headers:httpOptions.header});
    }

    createComment(comment:Comment){
        var token=localStorage.getItem("token")
        var head;
        if(token){
        head={
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
          };
        }else{
            head={
                'Content-Type': 'application/json'
            };
        }
       let  httpOptions= {
            header: new  HttpHeaders(head)
        };
        return this.http.post<Comment>('/api/comments/',comment,{headers:httpOptions.header});
    }

    deletePost(postId:number){
        var token=localStorage.getItem("token")
        var head;
        if(token){
        head={
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
          };
        }else{
            head={
                'Content-Type': 'application/json'
            };
        }
       let  httpOptions= {
            header: new  HttpHeaders(head)
        };
        return this.http.delete("/api/posts/"+postId,{headers:httpOptions.header});
    }

  

    addPost(post:any):any{
        var token=localStorage.getItem("token")
        var head;
        if(token){
        head={
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
          };
        }else{
            head={
                'Content-Type': 'application/json'
            };
        }
       let  httpOptions= {
            header: new  HttpHeaders(head)
        };
        return this.http.post("/api/posts",post,{headers:httpOptions.header});
    }

    getAllTags():any{
        var token=localStorage.getItem("token")
        var head;
        if(token){
        head={
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
          };
        }else{
            head={
                'Content-Type': 'application/json'
            };
        }
       let  httpOptions= {
            header: new  HttpHeaders(head)
        };
        return this.http.get("/api/tags",{headers:httpOptions.header});
    }

    addTag(tag:any):any{
        var token=localStorage.getItem("token")
        var head;
        if(token){
        head={
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
          };
        }else{
            head={
                'Content-Type': 'application/json'
            };
        }
       let  httpOptions= {
            header: new  HttpHeaders(head)
        };
        return this.http.post("/api/tags",tag,{headers:httpOptions.header});
    }

    addTagInPost(postId:any,tagId:any):any{
        var token=localStorage.getItem("token")
        var head;
        if(token){
        head={
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
          };
        }else{
            head={
                'Content-Type': 'application/json'
            };
        }
       let  httpOptions= {
            header: new  HttpHeaders(head)
        };
        return this.http.post("/api/tags/add/"+postId+"/"+tagId,{headers:httpOptions.header});
    }

    getTagsByPost(postId:number):any{
        var token=localStorage.getItem("token")
        var head;
        if(token){
        head={
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
          };
        }else{
            head={
                'Content-Type': 'application/json'
            };
        }
       let  httpOptions= {
            header: new  HttpHeaders(head)
        };
        return this.http.get("/api/posts/tag/"+postId,{headers:httpOptions.header});
    }

    getOrderedPost(orderBy:string):any{
        var token=localStorage.getItem("token")
        var head;
        if(token){
        head={
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
          };
        }else{
            head={
                'Content-Type': 'application/json'
            };
        }
       let  httpOptions= {
            header: new  HttpHeaders(head)
        };
        return this.http.get("/api/posts/order/"+orderBy,{headers:httpOptions.header});
    }

    getOrderedComment(orderBy:string,postId:number):any{
        var token=localStorage.getItem("token")
        var head;
        if(token){
        head={
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
          };
        }else{
            head={
                'Content-Type': 'application/json'
            };
        }
       let  httpOptions= {
            header: new  HttpHeaders(head)
        };
        return this.http.get("/api/comments/post/order/"+postId+"/"+orderBy,{headers:httpOptions.header});
    }

    getPostSearched(text:string):any{
        var token=localStorage.getItem("token")
        var head;
        if(token){
        head={
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
          };
        }else{
            head={
                'Content-Type': 'application/json'
            };
        }
       let  httpOptions= {
            header: new  HttpHeaders(head)
        };
        return this.http.get("/api/posts/search/"+text,{headers:httpOptions.header});
    }

    deleteComment(commentId:number){
        var token=localStorage.getItem("token")
        var head;
        if(token){
        head={
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
          };
        }else{
            head={
                'Content-Type': 'application/json'
            };
        }
       let  httpOptions= {
            header: new  HttpHeaders(head)
        };
        return this.http.delete('/api/comments/'+commentId,{headers:httpOptions.header});
    }

    editComment(comment:Comment){
        var token=localStorage.getItem("token")
        var head;
        if(token){
        head={
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
          };
        }else{
            head={
                'Content-Type': 'application/json'
            };
        }
       let  httpOptions= {
            header: new  HttpHeaders(head)
        };
        return this.http.put('/api/comments/'+comment.id,comment,{headers:httpOptions.header});
    }
}