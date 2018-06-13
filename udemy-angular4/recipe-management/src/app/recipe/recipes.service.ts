import {EventEmitter, Injectable, OnInit} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../common/ingredient";
import {ShoppingService} from "../shopping/shopping.service";
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [];
  selectRecipeEventEmitter: EventEmitter<Recipe> = new EventEmitter();
  recipesListEditSubject:Subject<Recipe[]> = new Subject<Recipe[]>();

  constructor(private shoppingService: ShoppingService) {
    this.recipes.push(new Recipe(1, "Chicken Tikka Masala", "Spicy indian cuisince", "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/27/0/ZA0207H_chicken-in-creamy-tomato-curry-chicken-tikka-masala_s4x3.jpg.rend.hgtvcom.616.462.suffix/1387303023791.jpeg",
      [
        new Ingredient('Chicken', 10),
        new Ingredient('Chillies', 1),
        new Ingredient('Butter', 5),
      ]));
    this.recipes.push(new Recipe(2, "Chicken Vindaloo", "Spicy indian cuisince", "https://2117e.https.cdn.softlayer.net/802117E/www.archanaskitchen.com/images/archanaskitchen/0-Saffola_FitFoodie/1-Chicken_Vindaloo_Recipe_Saffola_Oats_Fit_Foodie-1.jpg",
      [
        new Ingredient('Chicken', 10),
        new Ingredient('Potatoes', 5),
        new Ingredient('Vinegar', 25),
      ]));
    this.recipes.push(new Recipe(3, "Gobi mattar", "Spicy indian cuisince og gobi", "https://2117e.https.cdn.softlayer.net/802117E/www.archanaskitchen.com/images/archanaskitchen/0-Saffola_FitFoodie/1-Chicken_Vindaloo_Recipe_Saffola_Oats_Fit_Foodie-1.jpg",
      [
        new Ingredient('Gobi', 10),
        new Ingredient('Mattar', 5)
      ]));
  }

  fetchRecipes():Recipe[] {
    return this.recipes.slice();
  }

  selectRecipe(selected: Recipe) {
    console.log('RecipeListComponent.onRecipeSelection ', selected);
    this.selectRecipeEventEmitter.emit(selected);
  }


  addToShoppingList(recipe: Recipe) {
    this.shoppingService.addIngredients(recipe.ingredients);
  }

  getRecipeByName(recipeName: string) {
    return this.recipes.filter(r => r.name === recipeName)[0];
  }

  getRecipeById(id: number) {
    return this.recipes.filter(r => r.id === id)[0];
  }

  addRecipe(recipe: Recipe) {
    recipe.id = this.recipes.length + 1;
    console.log('New Recipe : ' + JSON.stringify(recipe));
    this.recipes.push(recipe);
    this.recipesListEditSubject.next(this.fetchRecipes());
  }

  updateRecipe(updated: Recipe) {
    this.recipes.splice(updated.id - 1, 1, updated);
    this.recipesListEditSubject.next(this.fetchRecipes());
  }
}
