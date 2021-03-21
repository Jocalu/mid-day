import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { BookingsComponent } from './bookings.component'

describe('BookingsComponent', () => {
  let component: BookingsComponent
  let fixture: ComponentFixture<BookingsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
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
})
