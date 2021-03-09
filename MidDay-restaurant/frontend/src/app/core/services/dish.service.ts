
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Dish } from '../../model/Dish'

@Injectable({
  providedIn: 'root'
})
export class DishStoreService {
  dish$ = new BehaviorSubject<Dish[]>([])

  getDishes (): Dish[] {
    return this.dish$.getValue()
  }

  setDishes (dish: Dish[]):void {
    this.dish$.next(dish)
  }

  addDish (text: string) {
    const dish = [
      ...this.getDishes(),
      { id: this.getDishes().length + 1, text }
    ]
    this.setDishes(dish)
  }

  removeDish (id: number) {
    const dishes = this.getDishes().filter(dish => dish.id !== id)
    this.setDishes(dishes)
  }
}
