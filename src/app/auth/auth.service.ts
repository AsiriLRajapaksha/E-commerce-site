import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserSignup } from './user-signup.model';
import { UserLogin } from './user-login.model';

@Injectable({providedIn:"root"})
export class AuthService{

  constructor(private http:HttpClient){}

   login(email:string , password:string){

      const userLoginData: UserLogin = {
        email:email,
        password:password
      };

      this.http.post<{token:string}>("http://localhost:3000/api/auth/login",userLoginData)
        .subscribe( token => {
          console.log(token);
        });
   }

   userSignup(name:string , email:string , password:string){

     const userData: UserSignup ={
        name:name,
        email:email,
        password:password
     };

     this.http.post<{message:string}>("http://localhost:3000/api/auth/signup",userData)
      .subscribe( message =>{
        console.log(message);
      });
   }
}