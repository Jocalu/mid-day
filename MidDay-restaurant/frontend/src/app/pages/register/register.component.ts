import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper'
import { StoreService } from '../../core/services/store.service'
import { MatDialog } from '@angular/material/dialog'
import { PopupRegisterComponent } from './popup-register/popup-register.component'
import { BehaviorSubject } from 'rxjs'
import { Category } from 'src/app/core/model/Category'
import { Router } from '@angular/router'
import { CustomValidators } from './custom-validator'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})

export class RegisterComponent implements OnInit {
  constructor (
    public StoreService: StoreService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router : Router
  ) {}

  registerFormGroup = this.fb.group({
    userName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
    confirmPassword: ['', Validators.required]
  }, { validator: CustomValidators.match('password', 'confirmPassword', 'password-validatematch') })

  restaurantDataFormGroup = this.fb.group({
    name: ['', Validators.required],
    street: ['', Validators.required],
    number: ['', Validators.required],
    zipcode: ['', Validators.required],
    city: ['', Validators.required],
    phone: ['', Validators.required]
  })

  secondRestaurantDataFormGroup = this.fb.group({
    category: ['', Validators.required],
    capacity: ['', Validators.required],
    menuprice: ['', Validators.required],
    image: ''
  })

  registerUser ():void {
    if (this.secondRestaurantDataFormGroup.value.image === '') {
      this.secondRestaurantDataFormGroup.patchValue({ image: 'https://www.ecestaticos.com/image/clipping/0ba77a083b572d339abbec48b4eed2a8/estos-son-los-120-mejores-restaurantes-del-mundo-busca-cuantos-hay-en-cada-pais.jpg' })
    }
    this.StoreService.registerUserRestaurant(
      this.registerFormGroup.value,
      this.restaurantDataFormGroup.value,
      this.secondRestaurantDataFormGroup.value
    )
      .subscribe(user => {
        localStorage.setItem('', user._id)
        this.router.navigate(['/landing'])
      })

    this.registerFormGroup.reset()
    this.restaurantDataFormGroup.reset()
    this.secondRestaurantDataFormGroup.reset()
  }

  openConfirm ():void {
    this.dialog.open(PopupRegisterComponent)
  }

    hide:boolean= true;

    category$ = new BehaviorSubject<Category[]>([])

    ngOnInit (): void {
      this.StoreService.getCategories()
        .subscribe((category) => {
          this.category$.next(category)
        })
    }
}
