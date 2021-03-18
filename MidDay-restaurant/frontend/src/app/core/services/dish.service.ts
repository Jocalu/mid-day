import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { dishesURL } from 'src/app/constants/urls'
import { Dish } from '../model/Dish'

@Injectable({
  providedIn: 'root'
})
export class DishService {
  dishesURL = dishesURL

  constructor (
    private httpClient: HttpClient
  ) { }

  getDishesService (): Observable<Dish[]> {
    return this.httpClient.get<Dish[]>(this.dishesURL)
  }

  postDishService (dish : object): Observable<Dish[]> {
    return this.httpClient.post<Dish[]>(this.dishesURL, dish)
  }

  deleteDishService (id: string): Observable<Dish> {
    return this.httpClient.delete<Dish>(`${this.dishesURL}/${id}`)
  }
}
