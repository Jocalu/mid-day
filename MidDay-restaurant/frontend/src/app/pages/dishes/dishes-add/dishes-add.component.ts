import { Component, OnInit, Inject } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { StoreService } from '../../../core/services/store.service'
import { categories } from '../../../constants/categories'
import { ingredientsList } from '../../../constants/ingredients'
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-dishes-add',
  templateUrl: './dishes-add.component.html',
  styleUrls: ['./dishes-add.component.scss']
})
export class DishesAddComponent implements OnInit {
  constructor (
    public StoreService: StoreService,
        private dialog: MatDialog,
    private fb: FormBuilder
  ) { }

  categories = categories

  openPopUp () {
    this.dialog.open(PopUp, {})
  }

  ingredientsList=ingredientsList

  dish = this.fb.group({
    type: '',
    name: '',
    extra: 0,
    ingredients: ''
  })

  postClick () {
    this.StoreService.postDish(this.dish.value)
    this.dish.reset()
  }

  ngOnInit (): void {

  }
}

export interface DialogData {
  menssage: 'message';
}
@Component({
  selector: 'popup',
  templateUrl: 'popup.html'
})
export class PopUp {
  constructor (@Inject(MAT_DIALOG_DATA) private data: DialogData) {}
}
