import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from '../login/login.component'
import { AuthService } from '../../core/services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  constructor (
    public dialog: MatDialog,
    public authService: AuthService) {}

  openLogin ():void {
    this.dialog.open(LoginComponent)
  }

  logOut ():void {
    localStorage.removeItem('')
  }

  isAuth (): boolean {
    return this.authService.isAuthenticated()
  }
}
