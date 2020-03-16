import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  id:string;
  recipeDetail:Recipe;

  constructor(private recipeService:RecipeService ,private route:ActivatedRoute,  private router:Router) { }

  ngOnInit() {
    this.route.params
      .subscribe((params:Params) => {
        this.id = params['id'];
        this.recipeDetail = this.recipeService.getRecipeDetails(this.id);
      });
  }

  onAddShoppingList(){
    this.recipeService.addToShoppingList(this.recipeDetail.ingredient);
    this.router.navigate(['shopping-list']);
  }

}
