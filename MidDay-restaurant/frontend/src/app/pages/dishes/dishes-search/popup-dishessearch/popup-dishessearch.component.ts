import { Component, Input } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { StoreService } from '../../../../core/services/store.service'

@Component({
  selector: 'app-popup-dishessearch',
  templateUrl: './popup-dishessearch.component.html',
  styleUrls: ['./popup-dishessearch.component.scss']
})
export class PopupDishessearchComponent {
  constructor (
    public StoreSRV: StoreService,
    public dialog: MatDialog
  ) {}

  @Input() dishId: string

  deleteHandleClick (dishId: string) :void {
    this.StoreSRV.deleteDish(dishId).subscribe()
    this.dialog.closeAll()
  }

  deleteCanceled ():void {
    this.dialog.closeAll()
  }
}
