import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { Price } from '../shopping-cart/price.model';
import { ShoppingCart } from '../shopping-cart/shopping-cart.model';
import { Cart } from '../shared/cart.model';

@Injectable({providedIn:"root"})
export class ShoppingService{

    private ingredients:Ingredient[] = [
         new Ingredient('Apple',10)
      ];
    private getPriceForCalculation : Price[] = [];
    private price = [];
    private Total = 0 ;
    private shoppingCart:ShoppingCart;
    private cart:Cart[] = [];

    private updatedShoppingList = new Subject<Ingredient[]>();
    private updatedShoppingCart = new Subject<Ingredient[]>();
    
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

    calculatePrice(){
        for(var i = 0 ; i<1 ; i++){
            var sum = 0;
            if(this.ingredients[i].name == "tomato"){
                sum += this.getPriceForCalculation[0].tomato * this.ingredients[i].amount;
                this.Total += sum;
                this.price.push(sum);
                this.cart.ingredients = 
            }
            if(this.ingredients[i].name == "Apple"){
                sum += this.getPriceForCalculation[0].apple * this.ingredients[i].amount;
                this.Total += sum;
                console.log("ksdjfnjsdnfjkd");
                this.price.push(sum);
            }

        }
        console.log(this.price);
    }

    getPrices(){
        this.http.get<{}>('http://localhost:3000/api/shopping-cart')
            .subscribe( price => {
                this.getPriceForCalculation = price[0].price;
                console.log(this.getPriceForCalculation);
                this.calculatePrice();
            });
    }

    getIngredientsDetailsToCart(){
        // const newCart = new Cart("","");
        // this.shoppingCart.ingredients = [];
        // this.shoppingCart.price = this.price;
        console.log(this.shoppingCart);
        // return this.shoppingCart;
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