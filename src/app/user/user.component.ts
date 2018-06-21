import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
import { NONAME } from 'dns';

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
  newUser;
  display=false;
  editMode=false;
  createMode=true;
  passwordChanger={

  };
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

  openAdd(){
    this.newUser={

    };
    this.editMode=false
    this.createMode=true;
    this.display=true;

  }
  cancel(){
    this.display=false;
    if(this.editMode == true){
      this.editMode=false;
    }
    if(this.createMode == true){
      this.createMode=false;
    }
    
    this.newUser=null;
  }
  openEdit(){
    this.createMode=false;
    this.editMode=true;
    this.display=true;
    this.newUser=this.pageOwner;
  }
  logout(){
    localStorage.removeItem("token");
    this.router.navigate["/login"]
  }
}
