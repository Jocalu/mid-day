import { Component } from '@angular/core'
import { Validators, FormBuilder } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { StoreService } from '../../core/services/store.service'
import { PopupLoginfailComponent } from '../popup-loginfail/popup-loginfail.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor (
    public StoreService: StoreService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private router : Router) { }

    hide : boolean = true;

    submitLogin ():void {
      this.dialog.closeAll()
      this.StoreService.loginUserRestaurant(
        this.loginPopUp.value)
        .subscribe(user => {
          localStorage.setItem('', user._id)
          this.router.navigate(['/landing'])
        },
        () => this.dialog.open(PopupLoginfailComponent))
    }

    /*   timeLogged () {
      setTimeout(function () {
        localStorage.removeItem('')
        const select = confirm('Se va a cerrar la sesión, ¿quieres continuar?')
        if (select === true) {
          console.log('hola')
        }
      }, 1000 * 5)
    } */

     loginPopUp = this.fb.group({
       userName: ['', [Validators.required]],
       password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]]
     })
}
