import { Component, OnInit } from '@angular/core'
import { StoreService } from '../../../core/services/store.service'
import { FormControl } from '@angular/forms'
import { debounce, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators'
import { of, Subject } from 'rxjs'
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

  text = new FormControl(null)

  dishes$ = this.StoreService.dishesAPI$

  searchTerms: Subject<string> = new Subject()

  ngOnInit (): void {
    this.StoreService.getDishes()
    /*     this.dishes$ = this.searchTerms
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(term => this.StoreService.searchDish(term))
      ) */
  }

  search (searchValue: string) {
    this.searchTerms.next(searchValue)
  }
}
