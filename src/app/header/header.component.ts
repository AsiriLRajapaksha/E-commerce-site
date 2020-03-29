import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping-list/shopping.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isAuthonticated:boolean= false;
  i : number;
  ingredients = false;

  constructor(private shoppingService:ShoppingService, private authService:AuthService) { }

  ngOnInit() {
    this.authService.getAuthStatusListner()
      .subscribe( isAuthonticated => {
          this.isAuthonticated = isAuthonticated;
      });

    this.shoppingService.getIngredientsDetailsToHeader()
      .subscribe( cart => { 
        this.i = cart.length;
      });
    if(this.i>0){
      this.ingredients = true;
    }
  }

  logOut(){
    this.isAuthonticated = false;
  }

}
