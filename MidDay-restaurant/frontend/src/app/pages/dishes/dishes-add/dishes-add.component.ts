import { Component } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { StoreService } from '../../../core/services/store.service'
import { courses } from '../../../constants/courses'
import { ingredientsList } from '../../../constants/ingredients'
import { MatDialog } from '@angular/material/dialog'
import { PopupDishesaddComponent } from '../dishes-add/popup-dishesadd/popup-dishesadd.component'

@Component({
  selector: 'app-dishes-add',
  templateUrl: './dishes-add.component.html',
  styleUrls: ['./dishes-add.component.scss']
})
export class DishesAddComponent {
  constructor (
    public StoreService: StoreService,
        private dialog: MatDialog,
    private fb: FormBuilder
  ) { }

  courses = courses

  openPopUp ():void {
    this.dialog.open(PopupDishesaddComponent)
  }

  ingredientsList=ingredientsList

  dish = this.fb.group({
    type: '',
    name: '',
    extra: 0,
    ingredients: ''
  })

  postClick ():void {
    this.StoreService.postDish(this.dish.value)
    this.dish.reset()
  }
}
