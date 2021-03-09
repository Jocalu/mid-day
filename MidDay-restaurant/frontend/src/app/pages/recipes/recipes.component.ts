import { Component, OnInit } from '@angular/core'
import { RecipeStoreService } from '../../recipe.service'
import { FormControl } from '@angular/forms'
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  constructor (private recipesStore: RecipeStoreService) {}

  ngOnInit (): void {
  }

  text = new FormControl(null)

  recipes: any = this.recipesStore.recipe$.subscribe(recipe => { this.recipes = recipe })

  clickHandler (inputData:string) {
    this.recipesStore.addRecipe(inputData)
  }

  deleteButton (id:number) {
    this.recipesStore.removeRecipe(id)
  }
}
