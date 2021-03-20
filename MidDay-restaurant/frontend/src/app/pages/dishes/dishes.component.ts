import { Component, OnInit } from '@angular/core'
import { StoreService } from '../../core/services/store.service'

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})

export class DishesComponent implements OnInit {
  switch: boolean = false

  constructor (
    private StoreService: StoreService
  ) {}

  buttonDelete: HTMLElement

  deleteClass (): void {
    this.buttonDelete = document.querySelector('.delete')
    this.buttonDelete.classList.remove('btn--active')
  }

  ngOnInit (): void {
    this.buttonDelete = document.querySelector('.delete')
    this.buttonDelete.classList.add('btn--active')
  }
}
