import { Component, OnInit } from '@angular/core'
import { StoreService } from '../../../core/services/store.service'
import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators'
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { MatDialog } from '@angular/material/dialog'
import { FormBuilder } from '@angular/forms'
import { PopupDishessearchComponent } from '../dishes-search/popup-dishessearch/popup-dishessearch.component'
import { Dish } from 'src/app/core/model/Dish'

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
    this.dialog.open(PopupDishessearchComponent)
  }

  dishes$= new BehaviorSubject<any>([])

  dishesFiltered

  searchTerms: Subject<string> = new Subject()

  searchDishes = this.fb.group({
    searchDish: ''
  })

  deleteHandleClick (id: string) :void {
    this.StoreService.deleteDish(id).subscribe(rest => this.dishes$.next(rest))
    this.searchDishes.patchValue({ searchDish: '' })
  }

  displayNone (i) :void {
    const dishSelected = document.querySelector(`.dish-${i}`)
    dishSelected.setAttribute('style', 'display: none')
  }

  search (searchValue: string):void {
    this.searchTerms.next(searchValue)
  }

  searchDish (term: string):Observable<Dish[]> {
    return this.dishes$.pipe(
      map(value => value.filter(dish => dish.name.toLowerCase().includes(term.toLowerCase()))
      )
    )
  }

  ngOnInit (): void {
    this.StoreService.getDishesForSearch().subscribe((answer) => { this.dishes$.next(answer.dishes) })

    this.dishesFiltered = this.searchTerms
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(term => this.searchDish(term))
      )
  }
}
