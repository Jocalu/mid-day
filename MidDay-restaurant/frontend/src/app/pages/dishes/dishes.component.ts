import { Component, OnInit } from '@angular/core'
import { StoreService } from '../../core/services/store.service'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})

export class DishesComponent implements OnInit {
  switch: boolean = false

    types:any=[
      { name: 'ENTRANTES' },
      { name: 'ENSALADAS' },
      { name: 'SOPAS' },
      { name: 'SEGUNDOS' },
      { name: 'POSTRES' }
    ];

  ingredients = new FormControl();
  ingredientsList: any = [
    { name: 'ternera', category: 'carne' },
    { name: 'parmesano', category: 'lácteos' },
    { name: 'aceite de oliva', category: 'aceites' },
    { name: 'comino', category: 'especias' },
    { name: 'tomate', category: 'hortalizas' },
    { name: 'piñones', category: 'frutos secos' },
    { name: 'cebolla', category: 'hortalizas' },
    { name: 'salmón', category: 'pescados' },
    { name: 'calabacín', category: 'hortalizas' },
    { name: 'sandía', category: 'frutas' },
    { name: 'huevos', category: 'huevos' },
    { name: 'garbanzos', category: 'legumbres' },
    { name: 'espinacas', category: 'hortalizas' }

  ];

  constructor (private StoreService: StoreService) {}

  dishes$ = this.StoreService.dishesAPI$

  ngOnInit (): void {
    this.StoreService.getDishes()
  }
}
