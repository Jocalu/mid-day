import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-popup-menusadd',
  templateUrl: './popup-menusadd.component.html'

})
export class PopupMenusaddComponent {
  constructor (
   public dialog: MatDialog

  ) { }

  closeDialog ():void {
    this.dialog.closeAll()
  }
}
