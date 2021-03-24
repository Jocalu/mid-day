import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BookingsComponent } from './bookings.component'
import { of } from 'rxjs'
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

describe('BookingsComponent', () => {
  let component: BookingsComponent
  let fixture: ComponentFixture<BookingsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingsComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
          useValue: { appearance: 'fill' }
        }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should call searchCapacity', () => {
    const spyFn = spyOn(component, 'searchCapacity').and.callThrough()

    component.searchCapacity()

    expect(spyFn).toHaveBeenCalled()
  })

  it('should call searchBookingsOfTheDay', () => {
    const spyFn = spyOn(component, 'searchBookingsOfTheDay').and.callThrough()
    const selectedDay = ('12-12-2022')

    component.searchBookingsOfTheDay(selectedDay)

    expect(spyFn).toHaveBeenCalled()
  })

  it('should call searchBookingsOfTheHour', () => {
    const spyFn = spyOn(component, 'searchBookingsOfTheHour').and.callThrough()

    const selectedHour = ('12:00')

    component.searchBookingsOfTheHour(selectedHour)

    expect(spyFn).toHaveBeenCalled()
  })

  it('should call showDetailsOfTheBooking', () => {
    const spyFn = spyOn(component, 'showDetailsOfTheBooking').and.callThrough()

    const selectedName = ('Marc')

    component.showDetailsOfTheBooking(selectedName)

    expect(spyFn).toHaveBeenCalled()
  })

  it('should call getUserRestaurant at the OnInit', () => {
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
})
