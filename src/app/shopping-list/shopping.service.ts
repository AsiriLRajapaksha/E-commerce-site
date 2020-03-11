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
    private index :number = -1;

    constructor(private http:HttpClient ){}

    addToShoppingList(ingredient : Ingredient[]){
        this.ingredients.push(...ingredient);
        this.updatedShoppingList.next(this.ingredients);
    }

    getShoppingListDetails(){
        return this.ingredients.slice();
    }

    addNewIngredients(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        console.log(this.ingredients);
        this.updatedShoppingList.next(this.ingredients);
    }

    getUpdatedShoppingList(){
        return this.updatedShoppingList.asObservable();
    }

    getIndex(i:number){
        this.index = i;
        console.log(i);
    }

    // onDeleteIngredient(){
    //     this.ingredients = this.ingredients.filter( i => i[this.index]);
    //     this.updatedShoppingList.next(this.ingredients);
    //     console.log(this.ingredients);
    // }

    // addToShoppingList(recipeDetail : Recipe ){
    //     this.shoppingList = recipeDetail.ingredient;
    //     this.http.post<{message:string}>('"http://localhost:3000/api/shopping' , this.shoppingList)
    //         .subscribe( response => {
    //             console.log(response.message);
    //         });
    // }

}