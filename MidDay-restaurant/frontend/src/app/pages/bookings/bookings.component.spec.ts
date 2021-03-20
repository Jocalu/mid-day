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
})
