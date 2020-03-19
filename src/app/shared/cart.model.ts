import { Ingredient } from './ingredient.model';
import { Price } from '../shopping-cart/price.model';

export interface Cart{
    ingredients : Ingredient[],
    price : Price[];
}