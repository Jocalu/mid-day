import { Component, OnInit } from '@angular/core'
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor (public dialog: MatDialog) { }

    login: FormGroup;

      hide = true;

      closeDialog () {
        this.dialog.closeAll()
      }

     emailFormControl = new FormControl('', [
       Validators.required,
       Validators.email
     ]);

     ngOnInit (): void {
     }
}
