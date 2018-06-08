import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from './post.service';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts:Post[];
  constructor(private router:Router,private postService:PostService) { }

  ngOnInit() {
    this.postService.getAllPosts()
    .subscribe(data =>{
      this.posts=data;
    });
  };

}
