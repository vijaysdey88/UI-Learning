import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { RecipeContainerComponent } from './recipe/recipe-container/recipe-container.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipe/recipe-item/recipe-item.component';
import {AppDropdownDirective} from "./common/directives/app-dropdown.directive";
import {RecipesService} from "./recipe/recipes.service";
import {ShoppingService} from "./shopping/shopping.service";
import {AppRouteModule} from "./route/app-route.module";
import {RouterModule, Routes} from "@angular/router";
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { NoRecipeSelectedComponent } from './recipe/no-recipe-selected/no-recipe-selected.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    //Components
    AppComponent,
    HeaderComponent,
    RecipeListComponent,
    ShoppingListComponent,
    RecipeContainerComponent,
    ShoppingEditComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    NoRecipeSelectedComponent,


    //Directives
    AppDropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouteModule
  ],
  providers: [
    RecipesService,
    ShoppingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
