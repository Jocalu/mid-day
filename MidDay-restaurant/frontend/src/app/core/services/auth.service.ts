import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor (private http : HttpClient) { }

  public isAuthenticated () : Boolean {
    const userData = localStorage.getItem('userInfo')
    if (userData && JSON.parse(userData)) {
      return true
    }
    return false
  }

  public setUserInfo (user) {
    localStorage.setItem('userInfo', JSON.stringify(user))
  }

  public validate (userName, password) {
    return this.http.post('/api/authenticate', { username: userName, password: password }).toPromise()
  }
}
