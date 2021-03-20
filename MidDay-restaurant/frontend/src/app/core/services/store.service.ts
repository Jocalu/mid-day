import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Dish } from '../model/Dish'
import { Menu } from '../model/Menu'
import { UserRestaurant } from '../model/UserRestaurant'
import { MenuService } from '../services/menu.service'
import { CategoryService } from '../services/category.service'
import { DishService } from '../services/dish.service'
import { UserRestaurantService } from '../services/user-restaurant.service'
import { Router } from '@angular/router'
import { Category } from '../model/Category'
import { IngredientList } from '../model/Ingredient'

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

  getCategories ():Observable<Category[]> {
    return this.CategoryService.getCategoriesService()
  }

  getIngredients ():Observable<IngredientList[]> {
    return this.DishService.getIngredientsService()
  }

  getDishesForSearch ():Observable<UserRestaurant> {
    return this.UserRestaurantService.getRestaurantService(localStorage.getItem(''))
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

  deleteDish (id: string) :Observable<Dish> {
    return this.DishService.deleteDishService(id)
  }

  deleteMenu (id:string) {
    return this.MenuService.deleteMenuService(id)
  }

  registerUserRestaurant (user, restaurant) {
    return this.UserRestaurantService.registerRestaurantService({ ...user, ...restaurant })
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
