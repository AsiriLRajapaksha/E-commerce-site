import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({providedIn:"root"})
export class AuthService{

  constructor(private http:HttpClient){}

   login(){

   }

   userSignup(name:string , email:string , password:string){

     const userData: User ={
        name:name,
        email:email,
        password:password
     }
     this.http.post<{message:string}>("http://localhost:3000/api/auth/signup",userData)
      .subscribe( message =>{
        console.log(message);
      });
   }
}