import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Injectable({providedIn:"root"})
export class ShoppingService{

    private ingredients:Ingredient[] = [
         new Ingredient('Apple',10)
      ];

    private updatedShoppingList = new Subject<Ingredient[]>();
    
    private index :number = -1;

    private addTocart:Boolean = false;

    constructor(private http:HttpClient ){}

    addToShoppingList(ingredient : Ingredient[] ){
        this.ingredients.push(...ingredient);
        this.updatedShoppingList.next(this.ingredients);
    }

    getShoppingListDetails(){
        return this.ingredients.slice();
    }

    addNewIngredients(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.updatedShoppingList.next(this.ingredients);
    }

    getUpdatedShoppingList(){
        return this.updatedShoppingList.asObservable();
    }

    getIndex(i : number){
        this.index = i;
    }

    deteteIngredient(){
        console.log(this.index);
        this.ingredients.splice(this.index , 1);
        this.updatedShoppingList.next(this.ingredients);
    }

    clearIngredients(){
        this.ingredients = [];
        this.updatedShoppingList.next(this.ingredients);
    }

    addToShoopingcart(addTocart:Boolean){
        this.addTocart = addTocart;
    }

    addIngredientsToCart(){
        return this.addTocart;
    }
    

    // addToShoppingList(ingredient : Ingredient[] ){
    //     this.ingredients.push(...ingredient);
    //     this.http.post<{message:string}>('http://localhost:3000/api/shopping' , this.ingredients)
    //         .subscribe( response => {
    //             console.log(response.message);
    //         });
    // }

    // getShoppingList(){
    //     this.http.get<{ingredients : Ingredient[]}>('http://localhost:3000/api/shopping')
    //         .subscribe( ingredient => {
    //             this.ingredients.push(...ingredient.ingredients);
    //         });
    // }

}