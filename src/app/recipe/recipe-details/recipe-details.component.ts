import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  id:string;
  recipeDetail:Recipe;

  constructor(private recipeService:RecipeService ,private route:ActivatedRoute, 
              private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params:Params) => {
        this.id = params['id'];
        this.recipeDetail = this.recipeService.getRecipeDetails(this.id)
          // .subscribe( recipe => {
          //   this.recipeDetail = recipe.recipe; 
          // });
      });
  }

  onAddShoppingList(){
    this.shoppingService.addToShoppingList(this.recipeDetail);
  }

}
