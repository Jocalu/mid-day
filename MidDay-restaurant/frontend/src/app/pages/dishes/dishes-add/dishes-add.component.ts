import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { StoreService } from '../../../core/services/store.service'
import { courses } from '../../../constants/courses'
import { MatDialog } from '@angular/material/dialog'
import { PopupDishesaddComponent } from '../dishes-add/popup-dishesadd/popup-dishesadd.component'
import { BehaviorSubject } from 'rxjs'
import { IngredientList } from '../../../core/model/Ingredient'

@Component({
  selector: 'app-dishes-add',
  templateUrl: './dishes-add.component.html',
  styleUrls: ['./dishes-add.component.scss']
})
export class DishesAddComponent {
  constructor (
    public StoreSRV: StoreService,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) { }

  courses = courses

  openPopUp ():void {
    this.dialog.open(PopupDishesaddComponent)
  }

  ingredientsList$ = new BehaviorSubject<IngredientList[]>([])

  dish = this.fb.group({
    type: ['', [Validators.required]],
    name: ['', [Validators.required]],
    extra: [0, [Validators.required]],
    ingredients: ''
  })

  postClick ():void {
    this.StoreSRV.postDish(this.dish.value)
      .subscribe(answer => this.StoreSRV.addDishRestaurant(localStorage.getItem(''), { dish: answer._id })
        .subscribe())
    this.dish.reset()
    this.dish.patchValue({ extra: 0 })
  }

  ngOnInit (): void {
    this.StoreSRV.getIngredients()
      .subscribe((ingredients) => {
        this.ingredientsList$.next(ingredients)
      })
  }
}
