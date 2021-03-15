import { Component, OnInit, Inject } from '@angular/core'
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { StoreService } from '../../../core/services/store.service'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-menus-delete',
  templateUrl: './menus-delete.component.html',
  styleUrls: ['./menus-delete.component.scss']
})
export class MenusDeleteComponent implements OnInit {
  constructor (
    public StoreService: StoreService,
    private dialog: MatDialog
  ) { }

    menu$ = new BehaviorSubject([])

    openPopUp () {
      this.dialog.open(Popup, {})
    }

    deleteClick (id: string) {
      this.StoreService.deleteMenu(id)
    }

    ngOnInit () {
      this.StoreService.getMenu().subscribe((menu) => { this.menu$.next(menu) })
    }
}
export interface DialogData {
  message: 'message';
}
@Component({
  selector: 'popup',
  templateUrl: 'popup.html'
})
export class Popup {
  constructor (@Inject(MAT_DIALOG_DATA) private data: DialogData) {}
}
