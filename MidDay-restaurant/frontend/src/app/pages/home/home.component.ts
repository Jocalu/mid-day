import { Component, OnInit } from '@angular/core'
import { FormGroup, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    login: FormGroup;

      hide = true;

     emailFormControl = new FormControl('', [
       Validators.required,
       Validators.email
     ]);

     constructor () { }

     ngOnInit (): void {
     }
}
