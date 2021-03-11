import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  constructor () {

  }

  hours:any[]=[
    { hour: '12:00' },
    { hour: '12:30' },
    { hour: '13:00' },
    { hour: '13:30' },
    { hour: '14:00' },
    { hour: '14:30' },
    { hour: '15:00' },
    { hour: '15:30' },
    { hour: '16:00' }
  ];

  bookings:any[]=[
    {
      date: '02/04/2020',
      hour: '12:30',
      bookingName: 'Gerard',
      phone: 666123123,
      pax: 3,
      people: [{
        name: 'Gerard',
        allergies: 'altramuces, frutos secos',
        selections: {
          first: 'sopa',
          second: 'carne',
          dessert: 'yogurt'
        }
      },
      {
        name: 'Nil',
        allergies: 'altramuces, frutos secos',
        selections: {
          first: 'ensalada',
          second: 'pato',
          dessert: 'crema'
        }
      },
      {
        name: 'Ignasi',
        allergies: 'altramuces, frutos secos',
        selections: {
          first: 'ensalada',
          second: 'pato',
          dessert: 'crema'
        }
      }]
    },
    {
      date: '02/04/2020',
      hour: '12:30',
      bookingName: 'Jose',
      phone: 666123123,
      pax: 1,
      people: [{
        name: 'Jose',
        allergies: 'altramuces, frutos secos',
        selections: {
          first: 'sopa',
          second: 'carne',
          dessert: 'yogurt'
        }
      }]
    }
  ]

  reservedCapacity:number=55

  maxCapacity:number = 100

  datepicker = new FormControl('');

  ngOnInit (): void {

  }
}
