import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  constructor () { }

  datepicker = new FormControl('')

  formatDate

  changeFormat (date) {
    const d = this.formatDate
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
    console.log(`${da}-${mo}-${ye}`)
  }

  ngOnInit (): void {
    console.log(this.datepicker.value)
  }
}
