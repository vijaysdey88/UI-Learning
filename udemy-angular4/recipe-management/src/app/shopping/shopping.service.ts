import {Ingredient} from "../common/ingredient";
import {Subject} from "rxjs/Subject";

export class ShoppingService {
  private ingredients: Ingredient[] = [];
  ingredientsChangedSubject = new Subject<Ingredient[]>();
  ingredientSelectedForEditSubject = new Subject<String>();

  constructor() {
    this.ingredients.push(new Ingredient('Chicken', 1))
    this.ingredients.push(new Ingredient('Spices', 2))
  }

  getIngredientsShopped(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient, onAddIngredient: {(ingredient: Ingredient) : void}): void {
    this.ingredients.push(ingredient);
    onAddIngredient(ingredient);
  }

  addIngredients(newIngredients: Ingredient[]): void {
    this.ingredients.push(...newIngredients);
    this.ingredientsChangedSubject.next(this.getIngredientsShopped());
  }

  getIngredientByName(ingredientName: string) : Ingredient {
    return this.ingredients.filter((i) => i.name === ingredientName)[0];
  }

  saveIngredient(ingredientBeingEditedName: string, newValue: Ingredient) {
    console.log('Inside ShoppingService.saveIngredient newValue', newValue);
    let ingredient: Ingredient= this.getIngredientByName(ingredientBeingEditedName);
    console.log('Inside ShoppingService.saveIngredient existingValue', ingredient);

    ingredient.name = newValue.name;
    ingredient.amount = newValue.amount;
    this.ingredientsChangedSubject.next(this.getIngredientsShopped());
    console.log(this.ingredients);
  }

  deleteIngredient(ingredientBeingEditedName: string) {
    console.log('Inside ShoppingService.deleteIngredient ingredientBeingEditedName:', ingredientBeingEditedName);

    let ingIndex = this.ingredients.map((i) => i.name).indexOf(ingredientBeingEditedName);
    if(ingIndex > -1) {
      this.ingredients.splice(ingIndex, 1);
    }

    this.ingredientsChangedSubject.next(this.getIngredientsShopped());
    console.log(this.ingredients);
  }
}

// export interface IAddIngredient {
//   (ingredient: Ingredient) : void;
// }
