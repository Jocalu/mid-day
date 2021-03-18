import { Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'
import { BehaviorSubject } from 'rxjs'
import { StoreService } from '../../../core/services/store.service'
import { PopupMenusaddComponent } from '../menus-add/popup-menusadd/popup-menusadd.component'

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

  openPopUp ():void {
    this.dialog.open(PopupMenusaddComponent)
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

  postClick ():void {
    this.StoreService.postMenu(this.menu.value)
      .subscribe(answer => this.StoreService.addMenuRestaurant(localStorage.getItem(''), { menu: answer._id }).subscribe())

    this.menu.reset()
  }

  ngOnInit (): void {
    this.StoreService.getUserRestaurant(localStorage.getItem(''))
      .subscribe((answer) => {
        this.firstCourses$.next(answer.dishes.filter((option) => option.type === 'PRIMEROS'))
        this.secondCourses$.next(answer.dishes.filter((option) => option.type === 'SEGUNDOS'))
        this.desserts$.next(answer.dishes.filter((option) => option.type === 'POSTRES'))
      })
  }
}
