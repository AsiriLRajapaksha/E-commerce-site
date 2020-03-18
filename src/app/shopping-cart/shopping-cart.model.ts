import { Ingredient } from '../shared/ingredient.model';

export interface ShoppingCart{
    ingredients : Ingredient[];
    price: number;
}