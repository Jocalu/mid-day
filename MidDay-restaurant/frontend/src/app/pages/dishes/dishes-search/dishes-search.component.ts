import { Component, OnInit, Inject } from '@angular/core'
import { StoreService } from '../../../core/services/store.service'
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'
import { Subject } from 'rxjs'
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-dishes-search',
  templateUrl: './dishes-search.component.html',
  styleUrls: ['./dishes-search.component.scss']
})
export class DishesSearchComponent implements OnInit {
  constructor (
    public StoreService: StoreService,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {}

  openPopUp () {
    this.dialog.open(Popup, {})
  }

  searchDishes = this.fb.group({
    searchDish: ''
  })

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

  deleteClick (id: string) {
    this.StoreService.deleteDish(id)
    this.searchDishes.patchValue({ searchDish: '' })
    this.search('')
  }

  search (searchValue: string) {
    this.searchTerms.next(searchValue)
  }
}

export interface DialogData {
  message: 'message';
}
@Component({
  selector: 'popup',
  templateUrl: 'popup.html'
})
export class Popup {
  constructor (@Inject(MAT_DIALOG_DATA) private data: DialogData) {}
}
