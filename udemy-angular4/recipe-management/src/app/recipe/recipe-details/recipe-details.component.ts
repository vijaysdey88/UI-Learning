import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipesService} from "../recipes.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe:Recipe;

  constructor(private recipeService: RecipesService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    console.log('RecipeDetailsComponent.ngOnInit - ', typeof +this.activatedRoute.snapshot.params['recipeId']);
   // this.recipe = this.recipeService.getRecipeById(+this.activatedRoute.snapshot.params['recipeId']);

    this.activatedRoute.params.subscribe((params: Params) => {
      this.recipe = this.recipeService.getRecipeById(+params['recipeId']);
    });
  }

  addToShoppingList() {
    this.recipeService.addToShoppingList(this.recipe);
  }

  editRecipe() {
    console.log('RecipeDetailsComponent.editRecipe path = ' + this.activatedRoute.pathFromRoot);
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.recipe);
    this.router.navigate(['/recipes']);
  }
}
