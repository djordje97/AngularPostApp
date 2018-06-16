import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { User } from "./model/user.model";
import { UserService } from "./user/user.service";

@Injectable()
export class AuthService{

    TOKEN_KEY = 'jwtToken';
     public static getJwtToken = function() {
        return localStorage.getItem(this.TOKEN_KEY);
      };
    
      public static setJwtToken = function(token) {
          localStorage.setItem(this.TOKEN_KEY, token);
      };
    
      public static removeJwtToken = function() {
          localStorage.removeItem(this.TOKEN_KEY);
      };
    
       public static createAuthorizationTokenHeader = function() {
        let token = this.getJwtToken();
          if (token) {
              return {
                "Authorization": "Bearer " + token,
                'Content-Type': 'application/json'
              };
          } else {
              return {
                'Content-Type': 'application/json'
              };
          }
      }
    
   


}