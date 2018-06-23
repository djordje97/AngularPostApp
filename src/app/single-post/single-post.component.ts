import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../post-list/post.service';
import { Post } from '../model/post.model';
import { Comment } from '../model/comment.model';
import { Element } from '@angular/compiler';
import { element } from 'protractor';
import { AuthService } from '../authservice';
import { User } from '../model/user.model';
import { UserService } from '../user/user.service';
import { NgForm } from '@angular/forms';
import { Tag } from '../model/tag.model';

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
  newComment:Comment=new Comment();
  logged:User;
  role;
  tags:Tag[];
  showTags:string="";

  @ViewChild('f')form:NgForm;
  constructor(private router: Router,private route: ActivatedRoute,private postService: PostService,private userService:UserService) { }

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

      var token=localStorage.getItem("token");
      console.log("Token u init "+token)
      this.userService.getLogged(token).subscribe(
        data =>{
          console.log(data);
            this.logged=data;
         this.userService.getRole(data.username).subscribe(result =>{
              console.log(result);
              this.role=result;
            });
        });

        this.postService.getTagsByPost(this.postId).subscribe(data =>{
          console.log(data);
          this.tags=data;
          console.log("Tags 1: "+this.tags);
          for(var i=0;i<this.tags.length;i++){
           this.showTags+="#"+this.tags[i].name+" ";
          }
        });

     

  }

  likePost(){
    alert(this.showTags);
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

    this.postService.updatePost(this.post.id,this.post).subscribe(data =>{
      console.log(data);
    });
    
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
    this.postService.updatePost(this.post.id,this.post).subscribe(data =>{
      console.log(data);
    });
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

    this.postService.updateComment(comment.id,comment).subscribe(data =>{
      console.log(data);
    });
  
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
    this.postService.updateComment(comment.id,comment).subscribe(data =>{
      console.log(data);
    });
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate["/login"]
  }
  createComment(){

    this.newComment.userC=this.logged;
    this.newComment.postC=this.post;
    this.newComment.likesC=0;
    this.newComment.dislikesC=0;
    console.log(this.newComment);
    this.postService.createComment(this.newComment).subscribe(data =>{
      this.comments.push(data);
      
      console.log(data);
      this.form.reset();
    });
  }

  editPost(){
    this.router.navigate(['/add-edit',this.postId]);
  }

  openAdd(){
    this.router.navigate(['/add-edit']);
  }
  
  deletePost(){
   var x=confirm("Are you shure?");
    if(x){
      this.postService.deletePost(this.postId).subscribe(data =>{
          this.router.navigate(["/posts"]);
      });
    }
  }
  
}
