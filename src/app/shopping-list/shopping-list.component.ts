import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ShoppingService } from './shopping.service';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy{
  ingredient : Ingredient[];
  subscribe : Subscription;
  index:number;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingredient = this.shoppingService.getShoppingListDetails();
    this.subscribe = this.shoppingService.getUpdatedShoppingList()
      .subscribe( (updatedList:Ingredient[]) => {
        this.ingredient = updatedList;
      })
    console.log(this.ingredient);
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }
  

}
