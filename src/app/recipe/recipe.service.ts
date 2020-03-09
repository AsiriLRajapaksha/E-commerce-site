import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({providedIn: "root"})
export class RecipeService{
    recipe: Recipe[];


    GetRecipes(){
        return this.recipe.push()
    }
}