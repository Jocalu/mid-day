import { Component, OnInit, Inject } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { BehaviorSubject } from 'rxjs'
import { StoreService } from '../../../core/services/store.service'

@Component({
  selector: 'app-menus-add',
  templateUrl: './menus-add.component.html',
  styleUrls: ['./menus-add.component.scss']
})
export class MenusAddComponent implements OnInit {
  constructor (
    private fb: FormBuilder,
    private dialog: MatDialog,
    public StoreService: StoreService
  ) { }

  openPopUp () {
    this.dialog.open(PopUp, {})
  }

  firstCourses$ = new BehaviorSubject([])
  secondCourses$ = new BehaviorSubject([])
  desserts$ = new BehaviorSubject([])

      menu = this.fb.group({
        firstCourse: '',
        secondCourse: '',
        dessert: '',
        price: 0
      })

      postClick () {
        this.StoreService.postMenu(this.menu.value)
        this.menu.reset()
      }

      ngOnInit (): void {
        this.StoreService.getDishes()
          .subscribe((dish) => {
            this.firstCourses$.next(dish.filter((option) => option.type === 'PRIMEROS'))
            this.secondCourses$.next(dish.filter((option) => option.type === 'SEGUNDOS'))
            this.desserts$.next(dish.filter((option) => option.type === 'POSTRES'))
          })
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
