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

  reservedCapacity:number=55

  maxCapacity:number = 100

  datepicker = new FormControl('');

  newFormat

  formatDate (date) {
    this.newFormat = moment(date).format('DD/MM/YYYY').replace('/', '-').replace('/', '-')
  }

  ngOnInit (): void {

  }
}
