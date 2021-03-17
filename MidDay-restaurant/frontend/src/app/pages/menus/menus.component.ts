import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {
  switch: boolean = true

  buttonAdd: any

  deleteClass ():void {
    this.buttonAdd = document.querySelector('.add')
    this.buttonAdd.classList.remove('btn--active')
  }

  ngOnInit (): void {
    this.buttonAdd = document.querySelector('.add')
    this.buttonAdd.classList.add('btn--active')
  }
}
