import { Ingredient } from './ingredient.model';
import { Price } from '../shopping-cart/price.model';

export class Cart{

    constructor(public name:string , public amount:number , public price){

    }
}