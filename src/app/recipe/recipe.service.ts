import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({providedIn: "root"})
export class RecipeService{
    private recipes:Recipe[] = [];
    private recipesUpdated = new Subject<{recipes:Recipe[]}>();

    constructor(private http: HttpClient){}

    getRecipes(){
        return this.http.get<{recipes:Recipe[]}>("http://localhost:3000/api/recipe")
        .subscribe(recipeDetails => {
            this.recipes = recipeDetails.recipes;
            console.log(recipeDetails.recipes);
            this.recipesUpdated.next({recipes:[...this.recipes]});
        });
    }

    getRecipeUpdateListner(){
        return this.recipesUpdated.asObservable();
    }
}