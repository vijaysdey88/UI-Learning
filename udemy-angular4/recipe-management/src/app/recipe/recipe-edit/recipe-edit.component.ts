import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Recipe} from "../recipe.model";
import {RecipesService} from "../recipes.service";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Ingredient} from "../../common/ingredient";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;
  mode: string = 'ADD';
  recipeForm: FormGroup;

  constructor(private recipeService: RecipesService, private activatedRoute: ActivatedRoute,  private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      if(null != params['recipeId']) {
        this.recipe = this.recipeService.getRecipeById(+params['recipeId']);
        this.mode = "EDIT";
      } else {
        this.recipe = new Recipe(null, null, null, null, []);
        this.mode = "ADD";
      }
    });
    this.initRecipeForm();
  }

  private initRecipeForm() {
    let ingredients: FormGroup[] = this.recipe.ingredients
                                            .map((i) => this.convertIngredientToFormGroup(i));
    let ingredientsArray = new FormArray(ingredients);

    this.recipeForm = new FormGroup({
      'name': new FormControl(this.recipe.name, Validators.required),
      'imagePath': new FormControl(this.recipe.imagePath, Validators.required),
      'description': new FormControl(this.recipe.description, Validators.required),
      'ingredients': ingredientsArray
    });
  }

  addIngredient(){
    let ingredientsArray: FormArray = <FormArray>this.recipeForm.get('ingredients');
    ingredientsArray.push(this.convertIngredientToFormGroup(new Ingredient(null, null)));
  }

  deleteIngredient(i: number) {
    let ingredientsArray: FormArray = <FormArray>this.recipeForm.get('ingredients');
    ingredientsArray.removeAt(i);
  }

  getIngredientsControls() {
    let formArray = <FormArray>this.recipeForm.get('ingredients');
    return formArray.controls;
  }

  private convertIngredientToFormGroup(i: Ingredient): FormGroup {
    return new FormGroup({
      'name': new FormControl(i.name, Validators.required),
      'amount': new FormControl(i.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    })
  }

  onSubmit() {
    console.log(this.recipeForm);
    let recipeDetails = this.recipeForm.value;
    console.log('RecipeEditComponent.onSubmit -', recipeDetails);
    if(this.mode === 'ADD') {
     // this.recipeService.addRecipe(new Recipe(null, recipeDetails.name, recipeDetails.description, recipeDetails.imagePath, recipeDetails.ingredients));
      this.recipeService.addRecipe(recipeDetails);
    } else {
      //this.recipeService.updateRecipe(new Recipe(this.recipe.id, recipeDetails.name, recipeDetails.description, recipeDetails.imagePath, recipeDetails.ingredients));
      recipeDetails.id = this.recipe.id;
      this.recipeService.updateRecipe(recipeDetails);
    }
    this.routeBack();
  }

  onCancel() {
    this.routeBack();
  }

  private routeBack() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }
}
