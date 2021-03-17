import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor (
    private authService : AuthService,
     private route : Router) { }

  canActivate ():boolean {
    if (this.authService.isAuthenticated()) {
      return true
    }
    this.route.navigate(['/home'])
    return false
  }
}
