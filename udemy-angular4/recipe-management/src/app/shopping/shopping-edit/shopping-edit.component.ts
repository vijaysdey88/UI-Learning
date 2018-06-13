import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../common/ingredient";
import {ShoppingService} from "../shopping.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('shoppingForm') shoppingForm: NgForm;
  private ingredientBeingEditedName: string;
  addMode: boolean = true;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
    this.shoppingService.ingredientSelectedForEditSubject.subscribe((ingredientName: string) => {
      const ingredientForEdit: Ingredient = this.shoppingService.getIngredientByName(ingredientName);
      this.shoppingForm.setValue({
        'name': ingredientForEdit.name,
        'amount': ingredientForEdit.amount
      });
      this.ingredientBeingEditedName = ingredientName;
      this.addMode = false;
    })
  }

  onSaveIngredient() {
    console.log(this.shoppingForm);
    let formValueObject = this.shoppingForm.value;

    if (this.addMode) {
      this.shoppingService.addIngredients([new Ingredient(formValueObject.name, formValueObject.amount)]);
    } else {
      this.shoppingService.saveIngredient(this.ingredientBeingEditedName, new Ingredient(formValueObject.name, formValueObject.amount));
    }
    this.resetFormAndClearEditedItem();

    setTimeout(() => {
      console.log('ShoppingEditComponent.onSaveIngredient > ', this.shoppingService.getIngredientsShopped())
    }, 2000)
  }

  onDelete() {
    this.shoppingService.deleteIngredient(this.ingredientBeingEditedName);
    this.resetFormAndClearEditedItem();
  }

  onReset() {
    this.resetFormAndClearEditedItem();
  }

  private resetFormAndClearEditedItem() {
    this.shoppingForm.reset();
    this.ingredientBeingEditedName = null;
    this.addMode = true;
  }
}
