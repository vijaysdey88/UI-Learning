import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipesService} from "../recipes.service";

@Component({
  selector: 'app-recipe-container',
  templateUrl: './recipe-container.component.html',
  styleUrls: ['./recipe-container.component.css']
})
export class RecipeContainerComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.selectRecipeEventEmitter.subscribe((recipe) => {
      this.selectedRecipe = recipe;
    });
  }

}
