import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ShoppingService } from './shopping.service';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy {
  ingredients : Ingredient[];
  subscribe : Subscription;
  index:number;
  addTocart:Boolean = false;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getShoppingListDetails();
    this.subscribe = this.shoppingService.getUpdatedShoppingList()
      .subscribe( updatedList => {
        this.ingredients = updatedList;
      });
    this.shoppingService.getPrices();
    console.log(this.ingredients);
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }

  getIndex( i : number){
    this.shoppingService.getIndex(i);
  }

  onAddTocart(){
     this.shoppingService.getIngredientsDetailsToCart();
    this.addTocart= true;
    this.shoppingService.addToShoopingcart(this.addTocart);
  }
  

}