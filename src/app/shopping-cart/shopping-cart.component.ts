import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Ingredient } from '../shared/ingredient.model';
import { Cart } from '../shared/cart.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  addTocart:Boolean = false;
  cartDetails : Cart[];

  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
     this.addTocart = this.shoppingService.addIngredientsToCart();
     if(this.addTocart){
       this.cartDetails = this.shoppingService.getIngredientsDetailsToCart();
     }
  }

}
