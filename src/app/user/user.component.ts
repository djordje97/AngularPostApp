import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  usernameParam:string;
  pageOwner;
  logged;
  role;
  constructor(private userService:UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.usernameParam=params['username'];
    });

    this.userService.getUserByUsername(this.usernameParam).subscribe(data =>{
        this.pageOwner=data;
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
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate["/login"]
  }
}
