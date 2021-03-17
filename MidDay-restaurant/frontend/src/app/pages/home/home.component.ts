import { Component } from '@angular/core'
import { FormGroup, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  login: FormGroup;

  hide: boolean = true;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
}
