import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { NgForm } from '@angular/forms';
import { ImageServiceService } from '../image-service.service';

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
  selectedFiles: FileList;
  currentFileUpload: File;
  username;
 @ViewChild('f') form:NgForm;
  constructor(private userService:UserService,private router:Router,private imageService:ImageServiceService) { }

  ngOnInit() {
    this.userService.getAllUsername().subscribe(data =>{
      this.usernames=data;
    });
  }

  createUser(){
    this.currentFileUpload = this.selectedFiles.item(0);
    console.log(this.newUser);
    if(this.usernames.find(x => x === this.newUser.username)){
      this.showMessage=true;
      return;
    }else{
      this.userService.addUser(this.newUser).subscribe(data =>{
        console.log("new User: "+data.username);
        this.username=data.username;
        console.log("This is a: "+this.username);
        this.imageService.pushFileToStorage(this.currentFileUpload,data.username).subscribe(res =>{

        });
          this.userService.setRole(data.username,"ROLE_COMMENTATOR").subscribe(result =>{
            if(result){
              this.success=true;
              this.form.reset();
            }
          });
        
      });
    
    }

    
    
  }

  selectFile(event) {
    const file = event.target.files.item(0);
 
    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }
  onFocus(){
    this.showMessage=false;
  }

  cancel(){
    this.router.navigate(["/login"]);
  }
}
