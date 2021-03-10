import { Component, OnInit } from '@angular/core'
import { StoreService } from '../../../core/services/store.service'

@Component({
  selector: 'app-dishes-search',
  templateUrl: './dishes-search.component.html',
  styleUrls: ['./dishes-search.component.scss']
})
export class DishesSearchComponent implements OnInit {
  constructor (private StoreService: StoreService) {}

  dishes$ = this.StoreService.dishesAPI$

  ngOnInit (): void {
    this.StoreService.getDishes()
  }
}
