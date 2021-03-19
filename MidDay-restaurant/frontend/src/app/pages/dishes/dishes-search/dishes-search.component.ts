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
    this.dialog.open(PopupDishessearchComponent, {})
  }

  searchDishes = this.fb.group({
    searchDish: ''
  })

  dishes$= new BehaviorSubject<any>([])
  dishesFiltered
  searchTerms: Subject<string> = new Subject()

  deleteClick (id: string) :void {
    this.StoreService.deleteDish(id).subscribe(rest => this.dishes$.next)

    this.searchDishes.patchValue({ searchDish: '' })
  }

  search (searchValue: string):void {
    this.searchTerms.next(searchValue)
  }

  searchDish (term: string):Observable<Dish[]> {
    return this.dishes$.pipe(
      map(value => value.filter(dish => dish ? dish.name.toLowerCase().includes(term.toLowerCase()) : [])
      )
    )
  }

  ngOnInit (): void {
    // eslint-disable-next-line no-debugger
    this.StoreService.getDishesForSearch().subscribe((answer) => { this.dishes$.next(answer.dishes) })

    this.dishesFiltered = this.searchTerms
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(term => this.searchDish(term))
      )
  }
}

/* (input)="search(searchBox.value)" */
