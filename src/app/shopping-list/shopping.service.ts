import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({providedIn:"root"})
export class ShoppingService{

    private ingredients:Ingredient[] = [
        new Ingredient('Apple',10)
      ];
    private updatedShoppingList = new Subject<Ingredient[]>();

    constructor(private http:HttpClient ){}

    addToShoppingList(ingredient : Ingredient[]){
        this.ingredients.push(...ingredient);
        this.updatedShoppingList.next({...this.ingredients})
    }

    getShoppingListDetails(){
        return this.ingredients.slice();
    }

    // addToShoppingList(recipeDetail : Recipe ){
    //     this.shoppingList = recipeDetail.ingredient;
    //     this.http.post<{message:string}>('"http://localhost:3000/api/shopping' , this.shoppingList)
    //         .subscribe( response => {
    //             console.log(response.message);
    //         });
    // }

}