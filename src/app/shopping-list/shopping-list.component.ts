import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ShoppingService } from './shopping.service';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy {
  ingredients : Ingredient[];
  subscribe : Subscription;
  sub2:Subscription;
  index:number;
  addTocart:Boolean = false;
  isIngredients:boolean = false;
  isAuthonticated= false;

  constructor(private shoppingService: ShoppingService, public authService:AuthService) { }

  ngOnInit() {

    this.authService.getAuthStatusListner()
      .subscribe( isAuthonticated => { 
          this.isAuthonticated = isAuthonticated;
      });

    this.ingredients = this.shoppingService.getShoppingListDetails();
    this.subscribe = this.shoppingService.getUpdatedShoppingList()
      .subscribe( updatedList => {
        this.ingredients = updatedList;
        if(this.ingredients.length>0){
          this.isIngredients=true;
        }
      });
    console.log(this.ingredients);

  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }

  getIndex( i : number){
    this.shoppingService.getIndex(i);
  }

  onAddTocart(){
    // if(this.isAuthonticated){
    //   this.addTocart= true;
    //   this.shoppingService.addToShoopingcart(this.addTocart);
    //   this.shoppingService.getPrices();
    // }else{
    //   alert("Please Login Before add Ingredients to the cart........");
    // }

      this.addTocart= true;
      this.shoppingService.addToShoopingcart(this.addTocart);
      this.shoppingService.getPrices();
  }
  

}