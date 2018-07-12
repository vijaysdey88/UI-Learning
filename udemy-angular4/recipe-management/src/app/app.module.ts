import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecipesService } from "./recipe/recipes.service";
import { ShoppingService } from "./shopping/shopping.service";
import { HttpModule } from '@angular/http';
import { AppDataService } from './common/service/app-data.service';
import { AppCommonModule } from './common/app-common.module';
import { ShoppingModule } from './shopping/shopping.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,

    CoreModule,
    AppCommonModule,
    ShoppingModule
  ],
  providers: [
    RecipesService,
    ShoppingService,
    AppDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
