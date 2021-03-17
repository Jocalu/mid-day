import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { categoriesURL } from 'src/app/constants/urls'
import { Category } from '../model/Category'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
    categoriesURL = categoriesURL

    constructor (
      private httpClient: HttpClient
    ) { }

    getCategoriesService (): Observable<Category[]> {
      return this.httpClient.get<Category[]>(this.categoriesURL)
    }
}
