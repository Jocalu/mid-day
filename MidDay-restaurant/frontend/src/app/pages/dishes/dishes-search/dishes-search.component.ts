import { Component, OnInit, Inject } from '@angular/core'
import { StoreService } from '../../../core/services/store.service'
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'
import { Subject } from 'rxjs'
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog'

export interface DialogData {
  menssage: 'message';
}

@Component({
  selector: 'app-dishes-search',
  templateUrl: './dishes-search.component.html',
  styleUrls: ['./dishes-search.component.scss']
})
export class DishesSearchComponent implements OnInit {
  constructor (
    private StoreService: StoreService,
    private dialog: MatDialog) {}

  openPopUp () {
    this.dialog.open(Popup, {})
  }

  dishes$: any

  searchTerms: Subject<string> = new Subject()

  ngOnInit (): void {
    this.StoreService.getDishes()

    this.dishes$ = this.searchTerms
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(term => this.StoreService.searchDish(term))
      )
  }

  deleteClick (id) {
    this.StoreService.deleteDish(id)
  }

  search (searchValue: string) {
    this.searchTerms.next(searchValue)
  }
}

@Component({
  selector: 'popup',
  templateUrl: 'popup.html'
})
export class Popup {
  constructor (@Inject(MAT_DIALOG_DATA) private data: DialogData) {}
}
