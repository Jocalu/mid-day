import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Dish } from '../model/Dish'
import { DishService } from '../services/dish.service'

@Injectable({
  providedIn: 'root'
})

export class StoreService {
  dishesAPI$ = new BehaviorSubject<Dish[]>([])

  getDishes () {
    this.DishService.getDishesService().subscribe((element) => this.dishesAPI$.next(element))
  }

  postDish (dish) {
    this.DishService.postDishService(dish).subscribe((element) => this.dishesAPI$.next(element))
  }

  constructor (
    private DishService : DishService) {

  }
}
