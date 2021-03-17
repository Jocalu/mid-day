import { Injectable } from '@angular/core'
import { BehaviorSubject, of } from 'rxjs'
import { Dish } from '../model/Dish'
import { Menu } from '../model/Menu'
import { UserRestaurant } from '../model/UserRestaurant'
import { MenuService } from '../services/menu.service'
import { CategoryService } from '../services/category.service'
import { DishService } from '../services/dish.service'
import { UserRestaurantService } from '../services/user-restaurant.service'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})

export class StoreService {
  dishesAPI$ = new BehaviorSubject<Dish[]>([])
  menuAPI$ = new BehaviorSubject<Menu[]>([])
  userRestaurantAPI$ = new BehaviorSubject<UserRestaurant[]>([])

  getCategories () {
    return this.CategoryService.getCategoriesService()
  }

  getDishes () {
    return this.DishService.getDishesService()
  }

  getDishesForSearch () {
    this.DishService.getDishesService()
      .subscribe((element) => this.dishesAPI$.next(element))
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
    return this.MenuService.getMenuService()
  }

  postMenu (menu) {
    this.MenuService.postMenuService(menu).subscribe((element) => this.menuAPI$.next(element))
  }

  deleteMenu (id) {
    this.MenuService
      .deleteMenuService(id)
      .subscribe((element) => this.menuAPI$.next(this.menuAPI$.getValue()))
  }

  error:string = ''

  RegisterUserRestaurant (user, restaurant) {
    this.UserRestaurantService.RegisterRestaurantService({ ...user, ...restaurant })
      .subscribe(user => localStorage.setItem('', user._id))
    if (this.error === '') {
      this.router.navigate(['/home'])
    }
  }

  LoginUserRestaurant (userRestaurant) {
    return this.UserRestaurantService.LoginRestaurantService(userRestaurant)
  }

  getUserRestaurant (id) {
    return this.UserRestaurantService.getRestaurantService(id)
  }

  /*   userLogged = new BehaviorSubject(<UserRestaurant>{})

  LoginUserRestaurant (userRestaurant) {
    this.UserRestaurantService.LoginRestaurantService(userRestaurant)
      .subscribe((user) => this.userLogged.next(user))
  } */

  constructor (
    public DishService : DishService,
     public MenuService : MenuService,
     public UserRestaurantService : UserRestaurantService,
     public CategoryService : CategoryService,
     public router: Router
  ) {}
}
