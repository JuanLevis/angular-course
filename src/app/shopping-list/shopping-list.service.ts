import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    selectedIngredient: Ingredient;
    private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5), new Ingredient("Tomatoes", 10)
  ];

  getIngredients() {
      return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  
  selectIngredient(ingredient: Ingredient) {
    this.selectedIngredient = this.selectedIngredient === ingredient ? null : ingredient
  }

  deleteSelectedIngredient() {
    const selectedIngredientIndex = this.ingredients.indexOf(this.selectedIngredient)
    selectedIngredientIndex > -1 && this.ingredients.splice(selectedIngredientIndex, 1);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  clearAllIngredients() {
    this.ingredients = []
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}