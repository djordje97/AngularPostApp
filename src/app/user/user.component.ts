import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
import { NONAME } from 'dns';
import { NgForm } from '@angular/forms';

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
  success=false;
  usernames:string[];
  showMessage=false;
  adminRole="ROLE_ADMIN";
  editedUser;
  fileToUpload: File = null;
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
          this.userService.setRole(data.username,"ROLE_USER").subscribe(result =>{
            if(result){
              this.success=true;
              this.form.reset();
              this.createMode=false;
              this.editMode=false;
            }
          });
        });
    }else{
      this.userService.updateUser(this.pageOwner.id,this.newUser).subscribe(data =>{

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
    
  }
  deleteUser(){
    this.userService.deleteUser(this.pageOwner.id).subscribe(data =>{
      this.router.navigate(['/posts']);
    });
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}
}
