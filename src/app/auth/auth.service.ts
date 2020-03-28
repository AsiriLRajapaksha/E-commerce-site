import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserSignup } from './user-signup.model';
import { UserLogin } from './user-login.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({providedIn:"root"})
export class AuthService{
  private token:string;
  private authStatusListner = new Subject<boolean>();
  private authStatusListner2 = new Subject<boolean>();

  constructor(private http:HttpClient, private  router:Router){}

   getToken(){
     return this.token;
   }

   getAuthStatusListner(){
     return this.authStatusListner.asObservable();
   }
   getAuthStatusListnerForShoppingService(){
    return this.authStatusListner2.asObservable();
  }

   login(email:string , password:string){

      const userLoginData: UserLogin = {
        email:email,
        password:password
      };

      this.http.post<{token:string}>("http://localhost:3000/api/auth/login",userLoginData)
        .subscribe( response => {
          this.token = response.token;
          this.authStatusListner.next(true);
          this.authStatusListner2.next(true);
          this.router.navigate(['recipes']);
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
        this.router.navigate(['recipes']);
      });
   }
}