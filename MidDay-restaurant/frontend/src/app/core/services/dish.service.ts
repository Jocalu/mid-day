import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Dish } from '../model/Dish'

@Injectable({
  providedIn: 'root'
})
export class DishService {
  dishesURL = 'http://localhost:5000/api/v1/midday/dish'

  constructor (
    private httpClient: HttpClient
  ) { }

  getDishesService (): Observable<Dish[]> {
    return this.httpClient.get<Dish[]>(this.dishesURL)
  }

  postDishService (dish): Observable<Dish[]> {
    return this.httpClient.post<Dish[]>(this.dishesURL, dish)
  }

  deleteDishService (id): Observable<Dish> {
    return this.httpClient.delete<Dish>(`${this.dishesURL}/${id}`)
  }
}
