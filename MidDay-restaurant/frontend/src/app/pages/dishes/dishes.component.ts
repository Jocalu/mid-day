import { Component, OnInit } from '@angular/core'
import { StoreService } from '../../core/services/store.service'

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})

export class DishesComponent implements OnInit {
  switch: boolean = false

  constructor (private StoreService: StoreService) {}

  dishes$ = this.StoreService.dishesAPI$

  ngOnInit (): void {
    this.StoreService.getDishes()
  }
}
