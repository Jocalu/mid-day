import { Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { StoreService } from '../../../core/services/store.service'
import { categories, ingredientsList } from '../../../constants/index'

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

  categories = categories

  ingredientsList=ingredientsList

  dish = this.fb.group({
    type: '',
    name: '',
    extra: 0,
    ingredients: ''
  })

  postClick () {
    this.StoreService.postDish(this.dish.value)
    this.dish.patchValue({
      type: '',
      name: '',
      extra: 0,
      ingredients: ''
    })
  }

  ngOnInit (): void {

  }
}
