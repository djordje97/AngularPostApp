import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../post-list/post.service';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  postId: number;
  post:Post;
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
  }

  liked(){
    this.post.likes++;
  }

  disliked(){
    this.post.dislike++;
  }
}
