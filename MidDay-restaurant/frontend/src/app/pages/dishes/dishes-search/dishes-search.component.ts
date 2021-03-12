import { Component, OnInit } from '@angular/core'
import { StoreService } from '../../../core/services/store.service'
import { FormControl } from '@angular/forms'
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'
import { Subject } from 'rxjs'
import { categories, ingredientsList } from '../../../constants/index'

@Component({
  selector: 'app-dishes-search',
  templateUrl: './dishes-search.component.html',
  styleUrls: ['./dishes-search.component.scss']
})
export class DishesSearchComponent implements OnInit {
  constructor (private StoreService: StoreService) {}

  categories = categories

  ingredients = new FormControl();

  ingredientsList = ingredientsList;

  dishes$

  searchTerms: Subject<string> = new Subject()

  ngOnInit (): void {
    this.StoreService.getDishes()

    this.dishes$ = this.searchTerms
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(term => this.StoreService.searchDish(term))
      )
    console.log(this.dishes$)
  }

  search (searchValue: string) {
    console.log(searchValue)
    this.searchTerms.next(searchValue)
  }
}
