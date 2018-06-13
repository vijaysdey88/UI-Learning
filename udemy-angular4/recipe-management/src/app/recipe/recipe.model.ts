import {Ingredient} from "../common/ingredient";

export class Recipe {

  public name: string;
  public id: number;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];


  constructor(id: number, name: string, description: string, imagePath: string, ingredients: Ingredient[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }


}
