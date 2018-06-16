import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { AuthService } from '../authservice';

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
  
   this.userService.login(this.username,this.password).subscribe(data => { 
      console.log(data);
      this.userJson=data;
      AuthService.setJwtToken(data.access_token);
    });
    this.router.navigate(['/posts']);
  }

}
