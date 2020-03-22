import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping-list/shopping.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  i : number;
  ingredients = false;
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
    this.shoppingService.getIngredientsDetailsToHeader()
      .subscribe( cart => {
        this.i = cart.length;
      });
    if(this.i>0){
      this.ingredients = true;
    }
  }

}
