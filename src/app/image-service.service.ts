import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor(private http:HttpClient) { }

  pushFileToStorage(file: File,username:string): any {
    const formdata: FormData = new FormData();
 
    formdata.append('file', file);
    formdata.append('username',username);
 
    var token=localStorage.getItem("token");
    console.log("Iz imageService: "+token);
    var head;
    if(token){
    head={
        "Authorization": "Bearer " + token
      };
    }
   let  httpOptions= {
        header: new  HttpHeaders(head)
    };
    return this.http.post("api/users/image",formdata,{headers: httpOptions.header});
  }

  addPostPhoto(file: File,id:any): any {
    const formdata: FormData = new FormData();
 
    formdata.append('file', file);
    formdata.append('id',id);
 
    var token=localStorage.getItem("token");
    console.log("Iz imageService: "+token);
    var head;
    if(token){
    head={
        "Authorization": "Bearer " + token
      };
    }
   let  httpOptions= {
        header: new  HttpHeaders(head)
    };
    return this.http.post("api/posts/image",formdata,{headers: httpOptions.header});
  }
}
