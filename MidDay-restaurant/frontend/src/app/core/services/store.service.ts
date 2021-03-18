import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, of } from 'rxjs'
import { Dish } from '../model/Dish'
import { Menu } from '../model/Menu'
import { UserRestaurant } from '../model/UserRestaurant'
import { MenuService } from '../services/menu.service'
import { CategoryService } from '../services/category.service'
import { DishService } from '../services/dish.service'
import { UserRestaurantService } from '../services/user-restaurant.service'
import { Router } from '@angular/router'
import { Category } from '../model/Category'

@Injectable({
  providedIn: 'root'
})

export class StoreService {
  constructor (
    public DishService : DishService,
     public MenuService : MenuService,
     public UserRestaurantService : UserRestaurantService,
     public CategoryService : CategoryService,
     public router: Router
  ) {}

  dishesAPI$ = new BehaviorSubject<Dish[]>([])
  menuAPI$ = new BehaviorSubject<Menu[]>([])
  userRestaurantAPI$ = new BehaviorSubject<UserRestaurant[]>([])

  getCategories ():Observable<Category[]> {
    return this.CategoryService.getCategoriesService()
  }

  getDishes ():Observable<Dish[]> {
    return this.DishService.getDishesService()
  }

  getDishesForSearch ():void {
    this.DishService.getDishesService()
      .subscribe((element) => this.dishesAPI$.next(element))
  }

  postDish (dish: Dish) :Observable<Dish> {
    return this.DishService.postDishService(dish)
  }

  postMenu (menu):Observable<Menu> {
    return this.MenuService.postMenuService(menu)
  }

  addMenuRestaurant (id:string, data: object):Observable<UserRestaurant> {
    return this.UserRestaurantService.addMenuService(id, data)
  }

  addDishRestaurant (id:string, data: object):Observable<UserRestaurant> {
    return this.UserRestaurantService.addDishService(id, data)
  }

  deleteDish (id: string):void {
    this.DishService
      .deleteDishService(id)
      .subscribe((element) => this.dishesAPI$.next(this.dishesAPI$.getValue().filter((dish) => dish._id !== element._id)))
  }

  searchDish (term):Observable<Dish[]> {
    return of(term ? this.dishesAPI$.getValue().filter(dish => dish.name.toLowerCase().includes(term.toLowerCase())) : [])
  }

  getMenu ():Observable<Menu[]> {
    return this.MenuService.getMenuService()
  }

  deleteMenu (id:string):void {
    this.MenuService
      .deleteMenuService(id)
      .subscribe((element) => this.menuAPI$.next(this.menuAPI$.getValue()))
  }

  error:string = ''

  registerUserRestaurant (user, restaurant) :void {
    this.UserRestaurantService.registerRestaurantService({ ...user, ...restaurant })
      .subscribe(user => localStorage.setItem('', user._id))
    if (this.error === '') {
      this.router.navigate(['/home'])
    }
  }

  loginUserRestaurant (userRestaurant):Observable<UserRestaurant> {
    return this.UserRestaurantService.loginRestaurantService(userRestaurant)
  }

  getUserRestaurant (id:string):Observable<UserRestaurant> {
    return this.UserRestaurantService.getRestaurantService(id)
  }

  updateUserRestaurant (id:string, data: object):Observable<UserRestaurant> {
    return this.UserRestaurantService.updateRestaurantService(id, data)
  }
}
