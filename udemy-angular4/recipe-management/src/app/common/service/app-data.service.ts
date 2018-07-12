import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Recipe } from '../../recipe/recipe.model';
import {  Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppDataService {

  saveDataEvent: Subject<void> = new Subject();
  fetchDataEvent: Subject<void> = new Subject();
  ENDPOINT: string = 'https://udemy-ng-course-6aee4.firebaseio.com/';

  constructor(private http: HttpClient) { }

  saveRecipes(recipes: Recipe[]) {
    return this.http.put(this.ENDPOINT+ '/recipes.json', recipes)
      .catch(((err, caught) => {
        console.log('Error in AppDataService.saveRecipes ' , err);
        return Observable.throw(err);
      }));
  }

  fetchAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.ENDPOINT+ '/recipes.json')
      .map((recipes) => {
      for(let r of recipes) {
        if(!r.ingredients) {
          r.ingredients = [];
        }
      }
      return recipes;
    });
  }
}
