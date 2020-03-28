import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { Price } from '../shopping-cart/price.model';
import { Cart } from '../shared/cart.model';
import { AuthService } from '../auth/auth.service';

@Injectable({providedIn:"root"})
export class ShoppingService{

    private getPriceCheck : boolean = true;

    private ingredients:Ingredient[] = [
        //  new Ingredient('Apple',10)
      ];

    private getPriceForCalculation : Price[] = [
        // new Price('name',amount,sum)
    ];

    private Total = 0 ;

    private cart:Cart[] = [];

    private updatedShoppingList = new Subject<Ingredient[]>();

    private updatedShoppingCart = new Subject<Cart[]>();
    
    private index :number = -1;

    private addTocart:Boolean = false;

    constructor(private http:HttpClient , private authService:AuthService){}

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

    /****************************************Regarding CART*************************************************** */

    addToShoopingcart(addTocart:Boolean){
        this.addTocart = addTocart;
    }

    addIngredientsToCart(){
        return this.addTocart;
    }

    calculatePrice(){
        var name:string;
        var amount:number;
 
        for(var i = 0 ; i<this.ingredients.length ; i++){
            var sum = 0;
            name = this.ingredients[i].name;
            amount = this.ingredients[i].amount;

            for(var j = 0 ; j < this.getPriceForCalculation.length ; j++){
                
                if(this.getPriceForCalculation[j].name == name){
                    sum += this.getPriceForCalculation[j].price * this.ingredients[i].amount;
                    this.Total += sum;
                    this.cart.push((new Cart(name ,amount ,sum)));
                    this.updatedShoppingCart.next(this.cart);
                    console.log(sum);
                }
            }

        }

    }

    getPrices(){
        if(this.getPriceCheck){
            this.http.get<{prices:any}>('http://localhost:3000/api/shopping-cart')
            .subscribe( price => {
                this.getPriceForCalculation = price.prices;
                console.log(this.getPriceForCalculation);
                this.calculatePrice();
            });
            this.getPriceCheck = false;
        }else{
            this.calculatePrice();
            console.log("get erlier");
        }
    }

    getIngredientsDetailsToCart(){
        return this.cart;
    }

    getIngredientsDetailsToHeader(){
        return this.updatedShoppingCart.asObservable();
    }

    deleteIngredientInCart(i : number){
        // this.cart = this.cart.filter(c => c[i] = this.cart[i]);
        this.cart.splice(i ,1);
        this.updatedShoppingCart.next(this.cart);
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