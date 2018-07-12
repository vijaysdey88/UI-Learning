
import { NgModule } from '@angular/core';
import { RecipeContainerComponent } from './recipe-container/recipe-container.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { NoRecipeSelectedComponent } from './no-recipe-selected/no-recipe-selected.component';
import { RecipesRouteModule } from './recipes-route.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppCommonModule } from '../common/app-common.module';

@NgModule({
  declarations: [
    RecipeContainerComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    NoRecipeSelectedComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppCommonModule,
    RecipesRouteModule
  ]
})
export class RecipesModule {

}
