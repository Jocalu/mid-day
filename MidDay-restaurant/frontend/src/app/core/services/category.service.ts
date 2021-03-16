import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Category } from '../model/Category'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
    categoriesURL = 'http://localhost:5000/api/v1/midday/restaurant/categories'

    constructor (
      private httpClient: HttpClient
    ) { }

    getCategoriesService (): Observable<Category[]> {
      return this.httpClient.get<Category[]>(this.categoriesURL)
    }
}
