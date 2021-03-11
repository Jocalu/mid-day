import { Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { StoreService } from '../../../core/services/store.service'

interface Ingredient {
  name: string;
}

interface IngredientList {
  disabled?: boolean;
  category: string;
  ingredient: Ingredient[];
}

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

  ingredientsList:IngredientList[] = [
    {
      category: 'carnes',
      ingredient: [
        { name: 'ternera' },
        { name: 'cordero' }
      ]
    },
    {
      category: 'pescados',
      ingredient: [
        { name: 'salmón' },
        { name: 'bacalao' }
      ]
    },
    {
      category: 'hortalizas',
      ingredient: [
        { name: 'calabacín' },
        { name: 'tomate' },
        { name: 'espinacas' }
      ]
    },
    {
      category: 'lácteos',
      ingredient: [
        { name: 'parmesano' },
        { name: 'yogurt' },
        { name: 'leche' }
      ]
    },
    {
      category: 'especias',
      ingredient: [
        { name: 'comino' },
        { name: 'canela' },
        { name: 'orégano' }
      ]
    },
    {
      category: 'frutos secos',
      ingredient: [
        { name: 'nueces' },
        { name: 'piñones' },
        { name: 'almendras' }
      ]
    },
    {
      category: 'frutas',
      ingredient: [
        { name: 'manzanas' },
        { name: 'peras' },
        { name: 'plátanos' }
      ]
    },
    {
      category: 'legumbres',
      ingredient: [
        { name: 'garbanzos' },
        { name: 'lentejas' },
        { name: 'judías' }
      ]
    }
  ]

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
