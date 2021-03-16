import { Component } from '@angular/core'
import { FormBuilder, Validators, FormControl } from '@angular/forms'
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper'
import { options } from '../../constants/options'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})

export class RegisterComponent {
  constructor (
    private fb: FormBuilder
  ) {}

  isLinear = false;

    registerFormGroup = this.fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      secondPassword: ['', Validators.required]
    })

      restaurantDataFormGroup = this.fb.group({
        name: ['', Validators.required],
        address: ['', Validators.required],
        number: ['', Validators.required],
        zipcode: ['', Validators.required],
        city: ['', Validators.required],
        phone: ['', Validators.required],
        category: ['', Validators.required],
        capacity: ['', Validators.required],
        menuprice: ['', Validators.required],
        image: ['', Validators.required]
      })

     emailFormControl = new FormControl('', [
       Validators.required,
       Validators.email
     ]);

     passwordFormControl = new FormControl('', [
       Validators.required,
       Validators.minLength(8)
     ]);

  options = options

  hide = true;
}
