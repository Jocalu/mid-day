import { Injectable } from '@angular/core'
import { BehaviorSubject, of } from 'rxjs'
import { take, tap } from 'rxjs/operators'
import { Dish } from '../model/Dish'
import { Menu } from '../model/Menu'
import { DishService } from '../services/dish.service'
import { MenuService } from '../services/menu.service'

@Injectable({
  providedIn: 'root'
})

export class StoreService {
  dishesAPI$ = new BehaviorSubject<Dish[]>([])
  menuAPI$ = new BehaviorSubject<Menu[]>([])

  getDishes () {
    this.DishService.getDishesService()
      .pipe(
        take(1),
        tap((element) => this.dishesAPI$.next(element)))
      .subscribe()
  }

  postDish (dish: Dish) {
    this.DishService.postDishService(dish)
      .subscribe((element) => this.dishesAPI$.next(element))
  }

  deleteDish (id) {
    this.DishService
      .deleteDishService(id)
      .subscribe((element) => this.dishesAPI$.next(this.dishesAPI$.getValue().filter((dish) => dish._id !== element._id)))
  }

  searchDish (term) {
    return of(term ? this.dishesAPI$.getValue().filter(dish => dish.name.toLowerCase().includes(term.toLowerCase())) : [])
  }

  getMenu () {
    this.MenuService.getMenuService().subscribe((element) => this.menuAPI$.next(element))
  }

  postMenu (menu) {
    this.MenuService.postMenuService(menu).subscribe((element) => this.menuAPI$.next(element))
  }

  deleteMenu (id) {
    this.MenuService
      .deleteMenuService(id)
      .subscribe((element) => this.menuAPI$.next(this.menuAPI$.getValue()))
  }

  constructor (
    public DishService : DishService,
     public MenuService : MenuService) {

  }
}
