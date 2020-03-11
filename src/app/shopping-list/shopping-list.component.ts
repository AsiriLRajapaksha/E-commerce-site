import { Component, OnInit } from '@angular/core';
import { ShoppingService } from './shopping.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredient : Ingredient[];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    // this.shoppingService.addToShoppingList();
    this.ingredient = this.shoppingService.getShoppingListDetails();
  }

}
