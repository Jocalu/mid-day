import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-popup-register',
  templateUrl: './popup-register.component.html'

})
export class PopupRegisterComponent {
  constructor (
   public dialog: MatDialog

  ) { }

  closeDialog ():void {
    this.dialog.closeAll()
  }
}
