import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper'
import { options } from '../../constants/options'
import { StoreService } from '../../core/services/store.service'
import { MatDialog } from '@angular/material/dialog'
import { PopupRegisterComponent } from './popup-register/popup-register.component'

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
      public StoreService: StoreService,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {}

    registerFormGroup = this.fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      secondPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]]
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

      postClick () {
        this.StoreService.postUserRestaurant(
          this.registerFormGroup.value,
          this.restaurantDataFormGroup.value)

        this.registerFormGroup.reset()
        this.restaurantDataFormGroup.reset()
      }

      openConfirm () {
        this.dialog.open(PopupRegisterComponent)
      }

  options = options

  hide = true;
}
