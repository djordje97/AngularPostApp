import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { User } from "../model/user.model";
import { AuthService } from "../authservice";
import {} from "jquery";


const httpOptions= {
    header: new  HttpHeaders()
};
@Injectable()
export class UserService{

    private url='/api/users';
    filesToUpload: Array<File>;
    constructor(private http: HttpClient){ this.filesToUpload=[];}

     getUserByUsername(username: string): any{
        var token=localStorage.getItem("token");
        var head;
        if(token){
        head={
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
          };
        }else{
            head={
                'Content-Type': 'application/json'
            };
        }
       let  httpOptions= {
            header: new  HttpHeaders(head)
        };
        return this.http.get<User>(this.url+'/get/'+username,{headers:httpOptions.header});
    }

    login(username,password):any{
        var token=localStorage.getItem("token");
        var head;
        if(token){
        head={
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
          };
        }else{
            head={
                'Content-Type': 'application/json'
            };
        }
       let  httpOptions= {
            header: new  HttpHeaders(head)
        };
        return this.http.post("api/auth/login",{'username':username,'password':password},{headers:httpOptions.header});
    }

    getLogged(token):any{
        console.log("Iz loged service "+token);
        var head;
        if(token){
        head={
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
          };
        }else{
            head={
                'Content-Type': 'application/json'
            };
        }
       let  httpOptions= {
            header: new  HttpHeaders(head)
        };
        return this.http.get("api/users/logged",{headers:httpOptions.header});
    }

    getAllUsername():any{
        var token=localStorage.getItem("token")
        var head;
        if(token){
        head={
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
          };
        }else{
            head={
                'Content-Type': 'application/json'
            };
        }
       let  httpOptions= {
            header: new  HttpHeaders(head)
        };
        return this.http.get("api/users/allUsername",{headers:httpOptions.header});
    }

    addUser(user:User):any{
        var token=localStorage.getItem("token")
        var head;
        if(token){
        head={
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
          };
        }else{
            head={
                'Content-Type': 'application/json'
            };
        }
       let  httpOptions= {
            header: new  HttpHeaders(head)
        };
        return this.http.post("api/users",user,{headers:httpOptions.header});
    }

    setRole(username:string,role:string):any{
        var token=localStorage.getItem("token")
        var head;
        if(token){
        head={
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
          };
        }else{
            head={
                'Content-Type': 'application/json'
            };
        }
       let  httpOptions= {
            header: new  HttpHeaders(head)
        };
        return this.http.put("api/users/role/"+username+"/"+role,{headers:httpOptions.header});
    }

    getRole(username:string):any{
        var token=localStorage.getItem("token")
        var head;
        if(token){
        head={
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
          };
        }else{
            head={
                'Content-Type': 'application/json'
            };
        }
       let  httpOptions= {
            header: new  HttpHeaders(head)
        };
        return this.http.get("api/users/get/role/"+username,{headers:httpOptions.header});
    }

    updateUser(id:number,user:any){
        var token=localStorage.getItem("token")
        var head;
        if(token){
        head={
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
          };
        }else{
            head={
                'Content-Type': 'application/json'
            };
        }
       let  httpOptions= {
            header: new  HttpHeaders(head)
        };
        return this.http.put("api/users/"+id,user,{headers:httpOptions.header});
    }
    passwordUpdate(changerPassword:any){
        var token=localStorage.getItem("token")
        var head;
        if(token){
        head={
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
          };
        }else{
            head={
                'Content-Type': 'application/json'
            };
        }
       let  httpOptions= {
            header: new  HttpHeaders(head)
        };
        return this.http.post("api/auth/change-password",changerPassword,{headers:httpOptions.header});
    }

    deleteUser(id:number){
        var token=localStorage.getItem("token")
        var head;
        if(token){
        head={
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
          };
        }else{
            head={
                'Content-Type': 'application/json'
            };
        }
       let  httpOptions= {
            header: new  HttpHeaders(head)
        };
        return this.http.delete("api/users/"+id,{headers:httpOptions.header});
    }

}