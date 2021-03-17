import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import * as moment from 'moment'
import { hours } from '../../constants/hours'
import { StoreService } from '../../core/services/store.service'
import { Bookings } from '../../core/model/Bookings'

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  constructor (
     public StoreService: StoreService
  ) {}

  hours = hours

  bookings$:Bookings[]

  maxCapacity$:number

  datepicker = new FormControl('');

  selectedDate:string; selectedHour:string; selectedName:string

  bookingsOfTheDay; bookingsOfTheHour; detailsOfTheBooking

  searchCapacity () {
    hours.forEach((hour) => {
      const bookingsForHour = hour.numOfbookings = this.bookingsOfTheDay.filter((booking) => booking.hour === hour.hour)
      hour.numOfbookings = bookingsForHour.reduce((accumulator, value) => accumulator + value.pax, 0)
    }
    )
  }

  searchBookingsOfTheDay (date: string) {
    this.selectedDate = moment(date).format('DD/MM/YYYY').replace('/', '-').replace('/', '-')
    this.bookingsOfTheDay = this.bookings$.filter((info) => info.date === this.selectedDate)
    this.bookingsOfTheHour = []
    this.detailsOfTheBooking = []
  }

  searchBookingsOfTheHour (selectedHour: string) {
    this.bookingsOfTheHour = this.bookingsOfTheDay.filter((info) => info.hour === selectedHour)
    this.detailsOfTheBooking = []
  }

  showDetailsOfTheBooking (selectedName : string) {
    this.detailsOfTheBooking = this.bookingsOfTheHour.filter((info) => info.bookingName === selectedName)
  }

  ngOnInit (): void {
    this.StoreService.getUserRestaurant(localStorage.getItem(''))
      .subscribe((user) => {
        this.bookings$ = user.bookings
        this.maxCapacity$ = user.capacity
      })
  }
}
