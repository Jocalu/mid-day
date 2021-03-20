import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { dishesURL, ingredientsURL } from 'src/app/constants/urls'
import { Dish } from '../model/Dish'
import { IngredientList } from '../model/Ingredient'

@Injectable({
  providedIn: 'root'
})
export class DishService {
  dishesURL = dishesURL
  ingredientsURL = ingredientsURL

  constructor (
    private httpClient: HttpClient
  ) { }

  postDishService (dish : object): Observable<Dish> {
    return this.httpClient.post<Dish>(this.dishesURL, dish)
  }

  deleteDishService (id: string): Observable<Dish> {
    return this.httpClient.delete<Dish>(`${this.dishesURL}/${id}`)
  }

  getIngredientsService (): Observable<IngredientList[]> {
    return this.httpClient.get<IngredientList[]>(this.ingredientsURL)
  }
}
