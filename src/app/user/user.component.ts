import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
import { NONAME } from 'dns';
import { NgForm } from '@angular/forms';
import {} from "jquery";

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
  pageOwnerRole;
  newUser;
  display=false;
  editMode=false;
  createMode=true;
  success=false;
  usernames:string[];
  showMessage=false;
  adminRole="ROLE_ADMIN";
  editedUser;
  adminSelected=false;
  @ViewChild('f')form:NgForm;
  passwordChanger={

  };
  constructor(private userService:UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.usernameParam=params['username'];
    });
    this.userService.getAllUsername().subscribe(data =>{
      this.usernames=data;
    });
    this.userService.getUserByUsername(this.usernameParam).subscribe(data =>{
        this.pageOwner=data;
        this.userService.getRole(data.username).subscribe(result =>{
          console.log("pageOwner: "+result.authority);
          this.pageOwnerRole=result.authority;
        });
    });
    var token=localStorage.getItem("token");
      console.log("Token u init "+token)
      this.userService.getLogged(token).subscribe(
        data =>{
          console.log(data);
            this.logged=data;
         this.userService.getRole(data.username).subscribe(result =>{
              console.log(result);
              console.log(this.logged);
              console.log(this.pageOwner);
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
    if(this.pageOwnerRole === "ROLE_ADMIN"){
      this.adminSelected=true;
    }
  }
  logout(){
    localStorage.removeItem("token");
    this.router.navigate["/login"]
  }
  onFocus(){
    this.showMessage=false;
  }

  save(){
    if(this.createMode){
      if(this.usernames.find(x => x === this.newUser.username)){
        this.showMessage=true;
        return;
      }
        this.userService.addUser(this.newUser).subscribe(data =>{
          this.success=true;
          var sendRole="ROLE_USER";
          if(this.adminSelected == true){
            sendRole="ROLE_ADMIN";
          }
          this.userService.setRole(data.username,sendRole).subscribe(result =>{
            if(result){
              this.success=true;
              this.form.reset();
              this.createMode=false;
              this.editMode=false;
            }
          });
        });
    }else{
      console.log(this.adminSelected);
      this.userService.updateUser(this.pageOwner.id,this.newUser).subscribe(data =>{
        if(this.adminSelected == true){
          this.userService.setRole(this.pageOwner.username,"ROLE_ADMIN").subscribe(result =>{

          });
        }else{
          this.userService.setRole(this.pageOwner.username,"ROLE_USER").subscribe(result =>{

          });
        }

        this.userService.passwordUpdate(this.passwordChanger).subscribe(result =>{
      
        });
        console.log(data);
        this.success=true;
        this.form.reset();
        this.editMode=false;
        this.editedUser=data;
        this.pageOwner.name = this.editedUser.name;
        this.pageOwner.username=this.editedUser.username; 
        this.display=false;
      });
    }
    location.reload();
    
  }
  deleteUser(){
    var x=confirm("Are you shure?");
    if(x){
      this.userService.deleteUser(this.pageOwner.id).subscribe(data =>{
        this.router.navigate(['/posts']);
      });
    }
   
  }

 
}
