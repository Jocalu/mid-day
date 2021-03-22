import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RegisterComponent } from './register.component'
import { FormBuilder } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { of } from 'rxjs'

describe('RegisterComponent', () => {
  let component: RegisterComponent
  let fixture: ComponentFixture<RegisterComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        RouterTestingModule,
        MatDialogModule,
        BrowserAnimationsModule],
      declarations: [RegisterComponent],
      providers: [FormBuilder, {
        provide: MatDialogRef,
        useValue: {}
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

    const spyFn = spyOn(component.StoreService, 'registerUserRestaurant').and.returnValue(of(dataUser))

    component.registerUser()

    expect(spyFn).toHaveBeenCalled()
  })

  it('should call getCategories', () => {
    const category = [{
      _id: 'string',
      name: 'string',
      image: 'string'
    }]
    const spyFn = spyOn(component.StoreService, 'getCategories').and.returnValue(of(category))

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
