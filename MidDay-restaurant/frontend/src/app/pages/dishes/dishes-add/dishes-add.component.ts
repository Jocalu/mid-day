import { Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { StoreService } from '../../../core/services/store.service'

@Component({
  selector: 'app-dishes-add',
  templateUrl: './dishes-add.component.html',
  styleUrls: ['./dishes-add.component.scss']
})
export class DishesAddComponent implements OnInit {
  constructor (
    private StoreService: StoreService,
    private fb: FormBuilder
  ) { }

  categories:any=[
    { name: 'ENTRANTES' },
    { name: 'ENSALADAS' },
    { name: 'SOPAS' },
    { name: 'SEGUNDOS' },
    { name: 'POSTRES' }
  ];

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

  dish = this.fb.group({
    type: '',
    name: '',
    extra: 0,
    ingredients: ''
  })

  postClick () {
    this.StoreService.postDish(this.dish.value)
  }

  ngOnInit (): void {

  }
}
