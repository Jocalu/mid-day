import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RegisterComponent } from './register.component'
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { of } from 'rxjs'
import { MatStepperModule } from '@angular/material/stepper'
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'
import { RouterModule } from '@angular/router'
import { LandingComponent } from '../landing/landing.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

describe('RegisterComponent', () => {
  let component: RegisterComponent
  let fixture: ComponentFixture<RegisterComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([{ path: 'landing', component: LandingComponent }]),
        MatDialogModule,
        BrowserAnimationsModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        RouterModule.forRoot([])
      ],
      declarations: [RegisterComponent],
      providers: [FormBuilder, {
        provide: MatDialogRef,
        MAT_FORM_FIELD_DEFAULT_OPTIONS,
        useValue: { appearance: 'fill' }
      }]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should call openConfirm', () => {
    const spyFn = spyOn(component, 'openConfirm').and.callThrough()

    component.openConfirm()

    expect(spyFn).toHaveBeenCalled()
  })

  it('should call registerUser', () => {
    const spyFn = spyOn(component, 'registerUser').and.callThrough()

    component.registerUser()

    expect(spyFn).toHaveBeenCalled()
  })

  it('should call registerUserRestaurant', () => {
    const dataUser = {
      _id: 'string',
      userName: 'string',
      email: 'string',
      password: 'string',
      name: 'string',
      category: 'string',
      capacity: 1,
      phone: 1,
      street: 'string',
      number: 1,
      city: 'string',
      zipcode: 'string',
      image: 'string',
      menuprice: 1,
      bookings: [],
      menus: [],
      dishes: []
    }

    const spyFn = spyOn(component.StoreSRV, 'registerUserRestaurant').and.returnValue(of(dataUser))

    component.registerUser()

    expect(spyFn).toHaveBeenCalled()
  })

  it('should call getCategories', () => {
    const category = [{
      _id: 'string',
      name: 'string',
      image: 'string'
    }]
    const spyFn = spyOn(component.StoreSRV, 'getCategories').and.returnValue(of(category))

    component.ngOnInit()

    expect(spyFn).toHaveBeenCalled()
  })

  it('should call registerUser without image', () => {
    const spyFn = spyOn(component, 'registerUser').and.callThrough()

    component.secondRestaurantDataFormGroup.patchValue({ image: null })
    component.registerUser()

    expect(spyFn).toHaveBeenCalled()
  })
})
