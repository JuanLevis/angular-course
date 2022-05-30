import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './constants';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipesService: RecipeService,
    private authService: AuthService
  ) {}

  postRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.httpClient
      .put(`${baseUrl}/recipes.json`, recipes)
      .subscribe((response) => {
        console.log(response);
      });
  }

  getRecipes() {
    return this.httpClient.get<Recipe[]>(`${baseUrl}/recipes.json`).pipe(
      map((recipes) => {
        return recipes.map((recipe) => {
          return { ...recipe, ingredients: recipe.ingredients || [] };
        });
      }),
      tap((recipes) => {
        this.recipesService.setRecipes(recipes);
      })
    );
  }
}
