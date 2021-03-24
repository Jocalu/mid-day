import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-popup-dishesadd',
  templateUrl: './popup-dishesadd.component.html'

})
export class PopupDishesaddComponent {
  constructor (

    public dialog: MatDialog
  ) {}

  closeDialog ():void {
    this.dialog.closeAll()
  }
}
