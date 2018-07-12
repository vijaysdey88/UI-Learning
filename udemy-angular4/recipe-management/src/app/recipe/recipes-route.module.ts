import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeContainerComponent } from './recipe-container/recipe-container.component';
import { NoRecipeSelectedComponent } from './no-recipe-selected/no-recipe-selected.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

const recipeRoutes: Routes = [
  {path:'', component: RecipeContainerComponent, children: [
    { path: '', component: NoRecipeSelectedComponent},
    { path:'create', component: RecipeEditComponent },
    { path:':recipeId', component: RecipeDetailsComponent },
    { path:':recipeId/edit', component: RecipeEditComponent }
  ]}
];

@NgModule({
  imports : [
    RouterModule.forChild(recipeRoutes)
  ],
  exports : [
    RouterModule
  ]
})
export class RecipesRouteModule {

}
