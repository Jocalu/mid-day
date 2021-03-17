import { Component } from '@angular/core'
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    userName : String;
  userPassword : String;
  constructor (

    public dialog: MatDialog,
    private fb: FormBuilder) { }

    loginPopUp: FormGroup;

    hide = true;

    submitLogin () {
      this.dialog.closeAll()
    }

     loginFormGroup = this.fb.group({
       userName: ['', [Validators.required]],
       password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]]
     })
}
