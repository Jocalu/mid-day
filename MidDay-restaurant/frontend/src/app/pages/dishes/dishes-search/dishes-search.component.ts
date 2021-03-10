import { Component, OnInit } from '@angular/core'
import { StoreService } from '../../../core/services/store.service'
import { FormControl } from '@angular/forms'
import { debounce, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators'
import { of, Subject } from 'rxjs'

@Component({
  selector: 'app-dishes-search',
  templateUrl: './dishes-search.component.html',
  styleUrls: ['./dishes-search.component.scss']
})
export class DishesSearchComponent implements OnInit {
  constructor (private StoreService: StoreService) {}

      types:any=[
        { name: 'ENTRANTES' },
        { name: 'ENSALADAS' },
        { name: 'SOPAS' },
        { name: 'SEGUNDOS' },
        { name: 'POSTRES' }
      ];

  ingredients = new FormControl();

  ingredientsList: any = [
    { name: 'ternera', category: 'carne' },
    { name: 'parmesano', category: 'lácteos' },
    { name: 'aceite de oliva', category: 'aceites' },
    { name: 'comino', category: 'especias' },
    { name: 'tomate', category: 'hortalizas' },
    { name: 'piñones', category: 'frutos secos' },
    { name: 'cebolla', category: 'hortalizas' },
    { name: 'salmón', category: 'pescados' },
    { name: 'calabacín', category: 'hortalizas' },
    { name: 'sandía', category: 'frutas' },
    { name: 'huevos', category: 'huevos' },
    { name: 'garbanzos', category: 'legumbres' },
    { name: 'espinacas', category: 'hortalizas' }
  ];

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
