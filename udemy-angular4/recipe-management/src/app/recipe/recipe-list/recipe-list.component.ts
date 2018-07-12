import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipesService} from "../recipes.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];

  private subscription: Subscription;

  constructor(private recipesService: RecipesService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.recipes = this.recipesService.fetchRecipes();
    this.subscription = this.recipesService.recipesListEditSubject.subscribe((updated:Recipe[]) => {
      console.log('Updated list of recipes : ' + updated.map(r  => JSON.stringify(r)));
      this.recipes = updated
    });
  }

  onRecipeSelection(selected: Recipe) {
    this.recipesService.selectRecipe(selected);
  }

  onNewRecipeClick() {
    this.router.navigate(['create'], {relativeTo: this.activatedRoute});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
