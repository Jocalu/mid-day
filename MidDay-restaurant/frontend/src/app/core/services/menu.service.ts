import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Menu } from '../model/Menu'

@Injectable({
  providedIn: 'root'
})
export class MenuService {
    menuURL = 'http://localhost:5000/api/v1/midday/menu'

    constructor (
        private httpClient: HttpClient
    ) { }

    getMenuService (): Observable<Menu[]> {
      return this.httpClient.get<Menu[]>(this.menuURL)
    }

    postMenuService (menu): Observable<Menu[]> {
      return this.httpClient.post<Menu[]>(this.menuURL, menu)
    }

    deleteMenuService (id): Observable<Menu> {
      return this.httpClient.delete<Menu>(`${this.menuURL}/${id}`)
    }
}
