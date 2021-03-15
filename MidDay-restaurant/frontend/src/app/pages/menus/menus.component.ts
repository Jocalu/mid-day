import { Component, OnInit, Inject } from '@angular/core'
import { dishesList } from '../../constants/index'
import { FormBuilder } from '@angular/forms'
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { StoreService } from '../../core/services/store.service'

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {
  constructor (
    private fb: FormBuilder,
    private dialog: MatDialog,
    public StoreService: StoreService
  ) { }

  openPopUp () {
    this.dialog.open(PopUp, {})
  }

  dishesList=dishesList

    menu = this.fb.group({
      firstCourse: '',
      secondCourse: '',
      dessert: ''
    })

    ngOnInit (): void {
    }

    postClick () {
      this.StoreService.postMenu(this.menu.value)
      this.menu.reset()
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
