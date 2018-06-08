import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  userJson;
  constructor(private router: Router,private userService: UserService) { }

  ngOnInit() {
   
  }

  login(){
    this.userService.getUserByUsername(this.username)
    .subscribe(data => { 
      console.log(data);
      this.userJson=data;
      if (this.userJson.username === this.username && this.password === this.userJson.password){
      
        this.router.navigate(['/posts']);
      }
    });
   
  }

}
