import { Component, OnInit } from '@angular/core'
import { DishStoreService } from '../../core/services/dish.service'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})

export class DishesComponent implements OnInit {
    types:any=[
      { name: 'ENTRANTES' },
      { name: 'ENSALADAS' },
      { name: 'SOPAS' },
      { name: 'SEGUNDOS' },
      { name: 'POSTRES' }
    ];

       ingredients:any=[
         { name: 'Setas' },
         { name: 'Carnes' },
         { name: 'SOPAS' },
         { name: 'SEGUNDOS' },
         { name: 'POSTRES' }
       ]

       constructor (private dishesStore: DishStoreService) {}

       ngOnInit (): void {
       }

  text = new FormControl(null)

  dishes: any = this.dishesStore.dish$.subscribe(dish => { this.dishes = dish })

  clickHandler (inputData:string) {
    this.dishesStore.addDish(inputData)
  }

  deleteButton (id:number) {
    this.dishesStore.removeDish(id)
  }
}
