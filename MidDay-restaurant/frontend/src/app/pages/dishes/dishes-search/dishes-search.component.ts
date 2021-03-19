import { Component, OnInit } from '@angular/core'
import { StoreService } from '../../../core/services/store.service'
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'
import { Subject } from 'rxjs'
import { MatDialog } from '@angular/material/dialog'
import { FormBuilder } from '@angular/forms'
import { PopupDishessearchComponent } from '../dishes-search/popup-dishessearch/popup-dishessearch.component'
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

  openPopUp ():void {
    this.dialog.open(PopupDishessearchComponent, {})
  }

  searchDishes = this.fb.group({
    searchDish: ''
  })

  dishes$: any

  searchTerms: Subject<string> = new Subject()

  deleteClick (id: string) :void {
    this.StoreService.deleteDish(id).subscribe(rest => this.dishes$.next)

    this.searchDishes.patchValue({ searchDish: '' })
  }

  search (searchValue: string):void {
    this.searchTerms.next(searchValue)
  }

  ngOnInit (): void {
    this.StoreService.getDishesForSearch()

    this.dishes$ = this.searchTerms
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(term => this.StoreService.searchDish(term))
      )
  }
}
