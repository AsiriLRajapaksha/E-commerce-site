import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  recipes:Recipe[] = [];

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipes();
    this.recipeService.getRecipeUpdateListner()
      .subscribe((recipeData : {recipes : Recipe[]}) =>{
        this.recipes = recipeData.recipes
      });
    console.log("recipesjhbkjdsjfdsf ", this.recipes);
  }

  

}
