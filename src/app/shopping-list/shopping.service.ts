import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({providedIn:"root"})
export class ShoppingService{

    private shoppingList: Ingredient[];

    constructor(private http:HttpClient , private route:Route){}

    addToShoppingList(recipeDetail : Recipe ){
        this.shoppingList = recipeDetail.ingredient;
        this.http.post<{message:string}>('"http://localhost:3000/api/shopping' , this.shoppingList)
            .subscribe( response => {
                console.log(response.message);
            });
    }

}