import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user/user.service';
import { PostService } from '../post-list/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../model/post.model';
import { Tag } from '../model/tag.model';
import { NgForm } from '@angular/forms';
import { ImageServiceService } from '../image-service.service';

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.css']
})
export class AddEditPostComponent implements OnInit {

  tags:Tag[];
  logged;
  tag:Tag=new Tag();
  postId;
  newPost:Post=new Post();
  editMode=false;
  allTags:any[]=[];
  listForAdd:any[]=[];
  success=false;
  selectedFiles: FileList;
  currentFileUpload: File;
  @ViewChild('f')form:NgForm;
  constructor(private userService:UserService,private postService:PostService,private router:Router,private activeRoute:ActivatedRoute,private imageService:ImageServiceService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params =>{
      this.postId=params["id"];
      console.log(this.postId); 
      if(this.postId){
        this.postService.getPostById(this.postId)
        .subscribe(data =>{
            this.newPost=data;
            this.editMode=true;
        });
      }
    });
    var token=localStorage.getItem("token");
      console.log("Token u init "+token)
      this.userService.getLogged(token).subscribe(
        data =>{
          console.log(data);
            this.logged=data;
        });

        var token=localStorage.getItem("token");
      console.log("Token u init "+token)
      this.postService.getAllTags().subscribe(
        data =>{
          console.log(data);
            this.tags=data;
        });
  }

  selectFile(event) {
    const file = event.target.files.item(0);
 
    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }

  save(){
    if(this.editMode){
      this.postService.updatePost(this.postId,this.newPost).subscribe(data =>{
        this.imageService.addPostPhoto(this.currentFileUpload,data.id).subscribe(res =>{

        });
        this.router.navigate(["/posts"]);
      });
    }else{
     this.newPost.likes=0;
     this.newPost.dislike=0;
     this.newPost.longitude=0;
     this.newPost.latitude=0;
     this.newPost.user=this.logged;
     this.postService.addPost(this.newPost).subscribe(data =>{
       console.log("post id: "+data.id);
      this.imageService.addPostPhoto(this.currentFileUpload,data.id).subscribe(res =>{

      });
    this.listForAdd.forEach(tagForAdd => {
      this.postService.addTag(tagForAdd).subscribe(x =>{
        this.allTags.forEach(element => {
          this.postService.addTagInPost(data.id,x.id).subscribe(result =>{
            console.log("success");
          });
        });
      });
      
    });
     });
    }
    this.success=true;
   this.form.reset();
  }

  onFocus(){
    this.success=false;
  }
  addTag(){
        var t =this.tags.find(x => x.name == this.tag.name);
        if(t != undefined){
          this.allTags.push(t);
        }else{
          this.listForAdd.push(this.tag);
          this.allTags.push(this.tag);
          for(var i=0;i<this.allTags.length;i++){
            console.log(this.allTags[i]);
          }
        }
       
  }
  clearTag(){
    this.tag=null;
    this.tag=new Tag();
  }
  cancel(){
    this.router.navigate(['/posts']);
  }

}
