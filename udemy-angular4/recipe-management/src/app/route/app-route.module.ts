import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RecipeContainerComponent} from "../recipe/recipe-container/recipe-container.component";
import {ShoppingListComponent} from "../shopping/shopping-list/shopping-list.component";
import {RecipeEditComponent} from "../recipe/recipe-edit/recipe-edit.component";
import {NoRecipeSelectedComponent} from "../recipe/no-recipe-selected/no-recipe-selected.component";
import {RecipeDetailsComponent} from "../recipe/recipe-details/recipe-details.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {path:'recipes', component: RecipeContainerComponent, children: [
    { path: '', component: NoRecipeSelectedComponent},
    { path:'create', component: RecipeEditComponent },
    { path:':recipeId', component: RecipeDetailsComponent },
    { path:':recipeId/edit', component: RecipeEditComponent }
  ]},
  { path:'recipes-shopping', component: ShoppingListComponent }
]


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRouteModule { }
