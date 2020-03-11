import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  ingredient : Ingredient[];

  constructor(private shoppingService : ShoppingService) { }

  ngOnInit() {
  }

  onAdd( name : HTMLInputElement , amount){
    const newIngredient = new Ingredient(name.value , amount.value);
    this.shoppingService.addNewIngredients(newIngredient);
  }

  onDelete(){
    // this.shoppingService.onDeleteIngredient();
  }

}
