import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import { LoginComponent } from './login.component'
import { FormBuilder } from '@angular/forms'
import { of, throwError } from 'rxjs'
import { Router } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

describe('LoginComponent', () => {
  let component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>
  let router: Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, MatDialogModule, BrowserAnimationsModule],
      declarations: [LoginComponent],
      providers: [FormBuilder,
        {
          provide: MatDialogRef,
          useValue: {}
        }
      ]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    router = TestBed.inject(Router)
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should navigate to landing', () => {
    const user = {
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

    spyOn(component.StoreService, 'loginUserRestaurant').and.returnValue(of(user))

    const navigateSpy = spyOn(router, 'navigate')

    component.submitLogin()
    expect(navigateSpy).toHaveBeenCalledWith(['/landing'])
  })

  it('should return a 500 error', () => {
    spyOn(component.StoreService, 'loginUserRestaurant')
      .and.returnValue(throwError({ status: 500 }))

    const spyFn = spyOn(component, 'submitLogin').and.callThrough()

    component.submitLogin()

    expect(spyFn).toHaveBeenCalled()
  })
})
