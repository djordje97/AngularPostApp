import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../post-list/post.service';
import { Post } from '../model/post.model';
import { Comment } from '../model/comment.model';
import { Element } from '@angular/compiler';
import { element } from 'protractor';
import { AuthService } from '../authservice';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  postId: number;
  post:Post;
  comments:Comment[];
  likedPost=false;
  dislikedPost=false;
  likedComment: boolean;
  dislikedComment: boolean;
  commentId: number;
  constructor(private router: Router,private route: ActivatedRoute,private postService: PostService) { }

  ngOnInit() {
      this.route.params.subscribe(params =>{
        this.postId=params["id"];
        console.log(this.postId); 
      });
      
      this.postService.getPostById(this.postId)
      .subscribe(data =>{
          this.post=data;
      });

      this.postService.getCommentsByPost(this.postId)
      .subscribe( data =>{
        this.comments=data;
      });
  }

  likePost(){
    if(this.likedPost == false){
      if(this.dislikedPost == false){
        this.post.likes++;
        this.likedPost=true;
      }else{
        this.post.likes++;
        this.likedPost=true;
        this.post.dislike--;
        this.dislikedPost=false;
      }
     
    }else{
      this.post.likes--;
      this.likedPost=false;
    }
    
  }

  dislikePost(){
    if(this.dislikedPost == false){
      if(this.likedPost == false){
        this.post.dislike++;
        this.dislikedPost=true;
      }else{
        this.post.dislike++;
       this.dislikedPost=true;
       this.post.likes--;
       this.likedPost=false;
      }
      
    }else{
      this.post.dislike--;
      this.dislikedPost=false;
    }
  }

  likeComment(event){
    var target=event.target;
    var attr=target.attributes.name;
    console.log(attr.nodeValue);
    let idValue: string=attr.nodeValue;
    this.commentId=Number.parseInt(idValue);
    if(target.attributes.id.nodeValue == "true"){
      this.likedComment=true;
    }
    else{
      this.likedComment=false;
    }
    console.log(this.likedComment);
     var elements=document.getElementsByClassName('btn btn-danger');
     var element=elements.namedItem(idValue);
     if(element.id === "true"){
       this.dislikedComment=true;
     }else{
       this.dislikedComment = false;
     }
     var comment=this.comments.find(x => x.id == this.commentId);
    if(this.likedComment == false){
      if(this.dislikedComment == false){
        comment.likes++;
        target.attributes.id.nodeValue="true";
      }else{
        comment.likes++;
        target.attributes.id.nodeValue="true";
        comment.dislikes--;
        element.id="false";
      }
     
    }else{
      comment.likes--;
      target.attributes.id.nodeValue="false";
    }
  
  }
  
  dislikeComment(event){
    var target=event.target;
    var attr=target.attributes.name;
    console.log(attr.nodeValue);
    let idValue: string=attr.nodeValue;
    this.commentId=Number.parseInt(idValue);
    if(target.attributes.id.nodeValue == "true"){
      this.dislikedComment=true;
    }
    else{
      this.dislikedComment=false;
    }
     var elements=document.getElementsByClassName('btn btn-primary');
     var element=elements.namedItem(idValue);
     if(element.id === "true"){
       this.likedComment=true;
     }else{
       this.likedComment = false;
     }
     console.log("Liked: "+this.likedComment);
     var comment=this.comments.find(x => x.id == this.commentId);
    if(this.dislikedComment == false){
      if(this.likedComment == false){
        comment.dislikes++;
        target.attributes.id.nodeValue="true";
      }else{
        comment.dislikes++;
        target.attributes.id.nodeValue="true";
        comment.likes--;
        console.log(element.id);
        element.id="false";
      }
     
    }else{
      comment.dislikes--;
      target.attributes.id.nodeValue="false";
    }
  }

  logout(){
    AuthService.removeJwtToken();
    this.router.navigate["/login"]
  }
  
}
