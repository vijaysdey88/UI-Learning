import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import {RecipeContainerComponent} from "../recipe/recipe-container/recipe-container.component";
import {ShoppingListComponent} from "../shopping/shopping-list/shopping-list.component";
import {RecipeEditComponent} from "../recipe/recipe-edit/recipe-edit.component";
import {NoRecipeSelectedComponent} from "../recipe/no-recipe-selected/no-recipe-selected.component";
import {RecipeDetailsComponent} from "../recipe/recipe-details/recipe-details.component";
import { HomeComponent } from '../core/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: '../recipe/recipes.module#RecipesModule' },
  { path:'recipes-shopping', component: ShoppingListComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRouteModule { }
