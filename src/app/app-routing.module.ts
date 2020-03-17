import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


const routes: Routes = [
  {path:'' , redirectTo:'/recipes' , pathMatch:'full'},
  {path:'recipes' , component:RecipeComponent , children:[
    {path:':id' , component:RecipeDetailsComponent}
  ]},
  {path:'shopping-list' , component:ShoppingListComponent , children:[
    {path:'shopping-edit', component:ShoppingEditComponent}
  ]},
  {
    path:'shopping-cart',component:ShoppingCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
