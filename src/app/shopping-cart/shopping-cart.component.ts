import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  addTocart:Boolean = false;
  ingredients : Ingredient[];

  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
     this.addTocart = this.shoppingService.addIngredientsToCart();
     if(this.addTocart){
       this.ingredients = this.shoppingService.getShoppingListDetails();
       this.shoppingService.getPrice();
     }
  }

}
