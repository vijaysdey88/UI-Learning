import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../../common/ingredient";
import {ShoppingService} from "../shopping.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  subscription: Subscription;

  ingredients: Ingredient[] = [];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredientsShopped();
    console.log('ShoppingListComponent.ngOnInit - Intitializing ingredients ' + this.ingredients );
    this.subscription = this.shoppingService.ingredientsChangedSubject.subscribe((latestIngredients) => {
      this.ingredients = latestIngredients;
    });
  }

  onSelectIngredient(ingredientName: String) {
    this.shoppingService.ingredientSelectedForEditSubject.next(ingredientName);
  }
}
