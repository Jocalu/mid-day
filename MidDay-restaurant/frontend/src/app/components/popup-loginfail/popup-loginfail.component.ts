import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-popup-loginfail',
  templateUrl: './popup-loginfail.component.html'
})
export class PopupLoginfailComponent {
  constructor (
   public dialog: MatDialog

  ) { }

  closeDialog ():void {
    this.dialog.closeAll()
  }
}
