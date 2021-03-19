import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
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
    type: ['', [Validators.required]],
    name: ['', [Validators.required]],
    extra: [0, [Validators.required]],
    ingredients: ''
  })

  postClick ():void {
    this.StoreService.postDish(this.dish.value).subscribe(answer => this.StoreService.addDishRestaurant(localStorage.getItem(''), { dish: answer._id }).subscribe())
    this.dish.reset()
    this.dish.patchValue({ extra: 0 })
  }
}
