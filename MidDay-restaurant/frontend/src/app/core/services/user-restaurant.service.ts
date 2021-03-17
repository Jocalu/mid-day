
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { UserRestaurant } from '../model/UserRestaurant'
import { loginURL, registerURL, restaurantURL } from '../../constants/urls'

@Injectable({
  providedIn: 'root'
})
export class UserRestaurantService {
  registerURL = registerURL
  loginURL = loginURL
  restaurantURL = restaurantURL

  constructor (
       private httpClient: HttpClient
  ) { }

  RegisterRestaurantService (userRestaurant: UserRestaurant): Observable<UserRestaurant> {
    return this.httpClient.post<UserRestaurant>(this.registerURL, userRestaurant)
  }

  LoginRestaurantService (userRestaurant: UserRestaurant): Observable<UserRestaurant> {
    return this.httpClient.post<UserRestaurant>(this.loginURL, userRestaurant)
  }

  getRestaurantService (id : string): Observable<UserRestaurant> {
    return this.httpClient.get<UserRestaurant>(`${this.restaurantURL}${id}`)
  }
}
