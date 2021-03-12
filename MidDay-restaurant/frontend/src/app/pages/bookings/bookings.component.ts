import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import * as moment from 'moment'
import { hours, bookings } from '../../constants/index'
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  constructor () {

  }

  hours = hours

  bookings = bookings

  maxCapacity:number = 100

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

  searchBookingsOfTheDay (date) {
    this.selectedDate = moment(date).format('DD/MM/YYYY').replace('/', '-').replace('/', '-')
    this.bookingsOfTheDay = this.bookings.filter((info) => info.date === this.selectedDate)
    this.bookingsOfTheHour = []
    this.detailsOfTheBooking = []
  }

  searchBookingsOfTheHour (selectedHour) {
    this.bookingsOfTheHour = this.bookingsOfTheDay.filter((info) => info.hour === selectedHour)
    this.detailsOfTheBooking = []
  }

  showDetailsOfTheBooking (selectedName) {
    this.detailsOfTheBooking = this.bookingsOfTheHour.filter((info) => info.bookingName === selectedName)
  }

  ngOnInit (): void {

  }
}
