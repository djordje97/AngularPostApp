import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  showMessage:boolean=false;
  success=false;
  usernames:string[]
  newUser:User=new User();
 @ViewChild('f') form:NgForm;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.userService.getAllUsername().subscribe(data =>{
      this.usernames=data;
    });
  }

  createUser(){
    console.log(this.newUser);
    if(this.usernames.find(x => x === this.newUser.username)){
      this.showMessage=true;
      return;
    }else{
      this.userService.addUser(this.newUser).subscribe(data =>{
        if(data){
          this.userService.setRole(data.username,"ROLE_COMMENTATOR").subscribe(result =>{
            if(result){
              this.success=true;
              this.form.reset();
            }
          });
        }
      });
    }
    
  }

  onFocus(){
    this.showMessage=false;
  }

  cancel(){
    this.router.navigate(["/login"]);
  }
}
