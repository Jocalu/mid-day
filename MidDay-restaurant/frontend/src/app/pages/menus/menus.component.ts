import { Component, OnInit } from '@angular/core'
import { dishesList } from '../../constants/index'
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {
  constructor (
private fb: FormBuilder
  ) { }

  dishesList=dishesList

    menu = this.fb.group({
      first: '',
      second: '',
      dessert: ''
    })

    ngOnInit (): void {
    }
}
