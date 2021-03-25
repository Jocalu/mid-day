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
     public StoreSRV: StoreService
  ) {}

  hours = hours

  bookings$:Bookings[]

  maxCapacity$:number

  datepicker = new FormControl('');

  selectedDateFormat:string; selectedDate:string; selectedHour:string; selectedID:string

  bookingsOfTheDay: Bookings[]; bookingsOfTheHour: Bookings[]; detailsOfTheBooking : Bookings[]

  searchCapacity ():void {
    hours.forEach((hour) => {
      const bookingsForHour = this.bookingsOfTheDay.filter((booking: Bookings) => booking.hour === hour.hour)
      hour.numOfbookings = bookingsForHour.reduce((accumulator: number, value: Bookings) => accumulator + value.pax, 0)
    })
  }

  searchBookingsOfTheDay (date: string) {
    this.selectedDate = moment(date)
      .format('DD/MM/YYYY')
      .replace(/\//g, '-')

    this.selectedDateFormat = moment(date)
      .format('DD/M/YYYY')
      .replace(/\//g, '-')

    this.bookingsOfTheDay = this.bookings$.filter((info) => info.date === this.selectedDate || info.date === this.selectedDateFormat)

    this.bookingsOfTheHour = []
    this.detailsOfTheBooking = []
  }

  searchBookingsOfTheHour (selectedHour: string): void {
    this.bookingsOfTheHour = this.bookingsOfTheDay.filter((info: Bookings) => info.hour === selectedHour)
    this.detailsOfTheBooking = []
  }

  showDetailsOfTheBooking (selectedID : string): void {
    this.detailsOfTheBooking = this.bookingsOfTheHour.filter((info: Bookings) => info._id === selectedID)
  }

  ngOnInit (): void {
    this.StoreSRV.getUserRestaurant(localStorage.getItem(''))
      .subscribe((user) => {
        this.bookings$ = user.bookings
        this.maxCapacity$ = user.capacity
      })
  }
}
