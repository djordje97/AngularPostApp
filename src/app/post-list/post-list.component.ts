import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from './post.service';
import { Post } from '../model/post.model';
import { AuthService } from '../authservice';
import { UserService } from '../user/user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  logged:User;
  
  posts:Post[];
  constructor(private router:Router,private postService:PostService,private userService:UserService) { }


  ngOnInit() {
    this.userService.getLogged().subscribe(
      data =>{
        console.log(data);
          this.logged=data;
      });
    this.postService.getAllPosts()
    .subscribe(data =>{
      this.posts=data;
    });
  };

  logout(){

    AuthService.removeJwtToken();
    this.router.navigate["/login"]
  }
 


}
