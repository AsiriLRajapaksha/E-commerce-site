import { Cart } from './cart.model';
import { UserSignup } from '../auth/user-signup.model';

export interface Oreder{
    cart:Cart[],
    user:UserSignup;
}