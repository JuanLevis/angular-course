import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addNewIngredient(event) {
    event.preventDefault();
    const ingredientName: string = this.nameInput.nativeElement.value;
    const ingredientAmount: number = this.amountInput.nativeElement.value;
    this.shoppingListService.addIngredient(new Ingredient(ingredientName, ingredientAmount))
  }

  deleteIngredient() {
    this.shoppingListService.deleteSelectedIngredient();
  }

  clearIngredients() {
    this.shoppingListService.clearAllIngredients();
  }

}
