import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-popup-dishessearch',
  templateUrl: './popup-dishessearch.component.html'

})
export class PopupDishessearchComponent {
  constructor (

    public dialog: MatDialog
  ) {}

  closeDialog ():void {
    this.dialog.closeAll()
  }
}
