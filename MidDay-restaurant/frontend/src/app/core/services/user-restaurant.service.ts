
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { UserRestaurant } from '../model/UserRestaurant'
import { loginURL, registerURL, restaurantURL, restaurantMenusURL, restaurantDishesURL } from '../../constants/urls'

@Injectable({
  providedIn: 'root'
})
export class UserRestaurantService {
  registerURL = registerURL
  loginURL = loginURL
  restaurantURL = restaurantURL
  restaurantMenusURL = restaurantMenusURL
  restaurantDishesURL =restaurantDishesURL

  constructor (
       public httpClient: HttpClient
  ) { }

  registerRestaurantService (userRestaurant: UserRestaurant): Observable<UserRestaurant> {
    return this.httpClient.post<UserRestaurant>(this.registerURL, userRestaurant)
  }

  loginRestaurantService (userRestaurant: UserRestaurant): Observable<UserRestaurant> {
    return this.httpClient.post<UserRestaurant>(this.loginURL, userRestaurant)
  }

  getRestaurantService (id : string): Observable<UserRestaurant> {
    return this.httpClient.get<UserRestaurant>(`${this.restaurantURL}${id}`)
  }

  updateRestaurantService (id : string, data: object): Observable<UserRestaurant> {
    return this.httpClient.put<UserRestaurant>(`${this.restaurantURL}${id}`, data)
  }

  addMenuService (id : string, data: object): Observable<UserRestaurant> {
    return this.httpClient.post<UserRestaurant>(`${this.restaurantMenusURL}${id}`, data)
  }

  addDishService (id : string, data: object): Observable<UserRestaurant> {
    return this.httpClient.post<UserRestaurant>(`${this.restaurantDishesURL}${id}`, data)
  }
}
