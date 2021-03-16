import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from '../login/login.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  constructor (public dialog: MatDialog) {}

  openLogin () {
    const dialogRef = this.dialog.open(LoginComponent)

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`)
    })
  }
}
