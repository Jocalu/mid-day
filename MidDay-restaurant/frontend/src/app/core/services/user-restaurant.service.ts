
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { UserRestaurant } from '../model/UserRestaurant'

@Injectable({
  providedIn: 'root'
})
export class UserRestaurantService {
  userRestaurantURL = 'http://localhost:5000/api/v1/midday/restaurant/register'
  constructor (
       private httpClient: HttpClient
  ) { }

  postUserRestaurantService (userRestaurant): Observable<UserRestaurant[]> {
    return this.httpClient.post<UserRestaurant[]>(this.userRestaurantURL, userRestaurant)
  }
}
