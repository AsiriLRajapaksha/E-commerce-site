import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { RecipeService } from 'src/app/recipe/recipe.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  ingredient : Ingredient[];

  constructor(private shoppingList: ShoppingService) { }

  ngOnInit() {
  }

  onAddToList( name : HTMLInputElement , amount){
    const newIngredient = new Ingredient(name.value , amount.value);
    this.shoppingList.addNewIngredients(newIngredient);
  }

  onDelete(){
    // this.shoppingService.onDeleteIngredient();
  }

}
