import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
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
    public StoreSRV: StoreService
  ) { }

  openPopUp ():void {
    this.dialog.open(PopupMenusaddComponent)
  }

  firstCourses$ = new BehaviorSubject([])
  secondCourses$ = new BehaviorSubject([])
  desserts$ = new BehaviorSubject([])

  menu = this.fb.group({
    firstCourse: ['', [Validators.required]],
    secondCourse: ['', [Validators.required]],
    dessert: ['', [Validators.required]],
    price: [0, [Validators.required]]
  })

  postClick ():void {
    this.StoreSRV.postMenu(this.menu.value)
      .subscribe(answer => this.StoreSRV.addMenuRestaurant(localStorage.getItem(''), { menu: answer._id }).subscribe())

    this.menu.reset()
    this.menu.patchValue({ price: 0 })
  }

  ngOnInit (): void {
    this.StoreSRV.getUserRestaurant(localStorage.getItem(''))
      .subscribe((answer) => {
        this.firstCourses$.next(answer.dishes.filter((option) => option.type === 'PRIMEROS'))
        this.secondCourses$.next(answer.dishes.filter((option) => option.type === 'SEGUNDOS'))
        this.desserts$.next(answer.dishes.filter((option) => option.type === 'POSTRES'))
      })
  }
}
