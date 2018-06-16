import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { User } from "../model/user.model";
import { AuthService } from "../authservice";

var headerInfo=AuthService.createAuthorizationTokenHeader();
const httpOptions= {
    header: new  HttpHeaders(AuthService.createAuthorizationTokenHeader())
};
@Injectable()
export class UserService{

    private url='/api/users';
    constructor(private http: HttpClient){}

     getUserByUsername(username: string): any{
        return this.http.get<User>(this.url+'/get/'+username,{headers:httpOptions.header});
    }

    login(username,password):any{
        return this.http.post("api/auth/login",{'username':username,'password':password},{headers:httpOptions.header});
    }

    getLogged():any{
        return this.http.get("api/users/logged",{headers:httpOptions.header});
    }
}