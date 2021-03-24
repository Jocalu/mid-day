import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { BehaviorSubject } from 'rxjs'
import { StoreService } from '../../../core/services/store.service'

import { PopupMenusdeleteComponent } from './popup-menusdelete/popup-menusdelete.component'

@Component({
  selector: 'app-menus-delete',
  templateUrl: './menus-delete.component.html',
  styleUrls: ['./menus-delete.component.scss']
})
export class MenusDeleteComponent implements OnInit {
  constructor (
    public StoreSRV: StoreService,
    private dialog: MatDialog
  ) { }

    menu$ = new BehaviorSubject([])

    openPopUp () {
      this.dialog.open(PopupMenusdeleteComponent)
    }

    deleteClick (id: string) {
      this.StoreSRV.deleteMenu(id).subscribe()
      this.StoreSRV.getUserRestaurant(localStorage.getItem(''))
        .subscribe((answer) => { this.menu$.next(answer.menus) })
    }

    ngOnInit () {
      this.StoreSRV.getUserRestaurant(localStorage.getItem(''))
        .subscribe((answer) => { this.menu$.next(answer.menus) })
    }
}
