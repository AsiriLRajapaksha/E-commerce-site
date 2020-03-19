import { Ingredient } from '../shared/ingredient.model';
import { Price } from './price.model';

export interface ShoppingCart{
    ingredients : Ingredient[],
    price: Price[]
}