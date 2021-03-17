
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { UserRestaurant } from '../model/UserRestaurant'

@Injectable({
  providedIn: 'root'
})
export class UserRestaurantService {
  registerURL = 'http://localhost:5000/api/v1/midday/restaurant/register'
  loginURL = 'http://localhost:5000/api/v1/midday/restaurant/login'

  constructor (
       private httpClient: HttpClient
  ) { }

  RegisterRestaurantService (userRestaurant): Observable<UserRestaurant> {
    return this.httpClient.post<UserRestaurant>(this.registerURL, userRestaurant)
  }

  LoginRestaurantService (userRestaurant): Observable<UserRestaurant> {
    return this.httpClient.post<UserRestaurant>(this.loginURL, userRestaurant)
  }
}
