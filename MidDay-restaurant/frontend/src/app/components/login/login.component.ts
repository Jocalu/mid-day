import { Component, OnInit } from '@angular/core'
import { FormGroup, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor () { }

    login: FormGroup;

      hide = true;

     emailFormControl = new FormControl('', [
       Validators.required,
       Validators.email
     ]);

     ngOnInit (): void {
     }
}
