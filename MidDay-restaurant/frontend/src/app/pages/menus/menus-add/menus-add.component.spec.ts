import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MenusAddComponent } from './menus-add.component'
import { of } from 'rxjs'
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatIconModule } from '@angular/material/icon'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

describe('MenusAddComponent', () => {
  let component: MenusAddComponent
  let fixture: ComponentFixture<MenusAddComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [MenusAddComponent],
      providers: [FormBuilder, {
        provide: MatDialogRef,
        MAT_FORM_FIELD_DEFAULT_OPTIONS,
        useValue: { appearance: 'fill' }
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusAddComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should call openPopUp', () => {
    const spyFn = spyOn(component, 'openPopUp').and.callThrough()

    component.openPopUp()

    expect(spyFn).toHaveBeenCalled()
  })

  it('should call postClick', () => {
    const spyFn = spyOn(component, 'postClick').and.callThrough()

    component.postClick()

    expect(spyFn).toHaveBeenCalled()
  })

  it('should call postMenu', () => {
    const menu = {
      _id: 'string',
      firstCourse: [],
      secondCourse: [],
      dessert: [],
      price: 1,
      date: 'string'
    }

    const spyFn = spyOn(component.StoreSRV, 'postMenu').and.returnValue(of(menu))

    component.postClick()

    expect(spyFn).toHaveBeenCalled()
  })

  it('should call getUserRestaurant', () => {
    const userRestaurant = {
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

    const spyFn = spyOn(component.StoreSRV, 'getUserRestaurant').and.returnValue(of(userRestaurant))

    component.ngOnInit()

    expect(spyFn).toHaveBeenCalled()
  })

  it('getUserRestaurant should be called', () => {
    let filterSpy: {filter: jasmine.Spy}

    filterSpy.filter.and.returnValue(of([]))
    component.StoreSRV.getUserRestaurant('').subscribe(() => {
      expect(filterSpy.filter.calls.count()).toBe(1)
    })
  })
})
