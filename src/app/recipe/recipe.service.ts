import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({providedIn: "root"})
export class RecipeService{
    private recipes:Recipe[] = [];
    private recipesUpdated = new Subject<{recipes:Recipe[]}>();

    constructor(private http: HttpClient){}

    getRecipes(){
        return this.http.get<{recipes:any}>("http://localhost:3000/api/recipe")
        .pipe(map((recipeData) => {
            return { recipe : recipeData.recipes.map( recipe => {
              return {
                id : recipe._id,
                name : recipe.name,
                description : recipe.description,
                imagePath : recipe.imagePath,
                ingredient : recipe.ingredient
              };
            })
          }
          }))
          .subscribe( (transformedRecipeData) => {
            this.recipes = transformedRecipeData.recipe;
            this.recipesUpdated.next({recipes:[...this.recipes]});
          });
        // .subscribe(recipeDetails => {
        //     this.recipes = recipeDetails.recipes;
        //     console.log(recipeDetails.recipes);
        //     this.recipesUpdated.next({recipes:[...this.recipes]});
        // });
    }

    getRecipeUpdateListner(){
        return this.recipesUpdated.asObservable();
    }

    getRecipeDetails(id:string){
        const recipe = this.recipes.find( recipe => recipe.id == id);       
        return recipe;
        // console.log(id);
        // return this.http.get<{recipe:Recipe}>("http://localhost:3000/api/recipe/" + id );
    }
}