import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { User } from "../model/user.model";

const httpOptions= {
    header: new  HttpHeaders({'Content-Type':'application/json'})
};
@Injectable()
export class UserService{

    private url='/api/users';
    constructor(private http: HttpClient){}

     getUserByUsername(username: string): any{
        return this.http.get<User>(this.url+'/get/'+username);
    }

}