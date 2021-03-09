
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Recipe } from '../app/model/Recipe'

@Injectable({
  providedIn: 'root'
})
export class RecipeStoreService {
  recipe$ = new BehaviorSubject<Recipe[]>([])

  getRecipes (): Recipe[] {
    return this.recipe$.getValue()
  }

  setRecipes (recipes: Recipe[]):void {
    this.recipe$.next(recipes)
  }

  addRecipe (text: string) {
    const recipes = [
      ...this.getRecipes(),
      { id: this.getRecipes().length + 1, text }
    ]
    this.setRecipes(recipes)
  }

  removeRecipe (id: number) {
    const recipes = this.getRecipes().filter(recipe => recipe.id !== id)
    this.setRecipes(recipes)
  }
}
