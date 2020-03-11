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
    this.ingredient = this.shoppingService.getShoppingListDetails();
    this.shoppingService.getUpdatedShoppingList()
      .subscribe( updatedList => {
        this.ingredient = updatedList;
      })
    console.log(this.ingredient);
  }
  
  onClick(i : number){
    this.shoppingService.getIndex(i);
  }

}
