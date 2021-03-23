import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-popup-menusdelete',
  templateUrl: './popup-menusdelete.component.html',
  styleUrls: ['./popup-menusdelete.component.scss']
})
export class PopupMenusdeleteComponent {
  constructor (
    public dialog: MatDialog
  ) {}

  closeDialog ():void {
    this.dialog.closeAll()
  }
}
