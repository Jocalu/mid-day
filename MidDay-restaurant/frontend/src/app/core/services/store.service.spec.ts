import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { Dish } from '../model/Dish'
import { StoreService } from './store.service'
import { of } from 'rxjs'

describe('StoreService', () => {
  let service: StoreService

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
    service = TestBed.inject(StoreService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('When getDishes is called, next method on dishesAPI$ to have been called', () => {
    const response: Dish[] = [{
      _id: '',
      type: '',
      name: '',
      ingredients: [''],
      extra: 2
    }]

    spyOn(service.DishService, 'getDishesService').and.returnValue(of(response))

    const spynext = spyOn(service.dishesAPI$, 'next')
    service.getDishes()

    expect(spynext).toHaveBeenCalled()
  })

  /* it('When postDish is called, next method on dishesAPI$ to have been called', () => {
    const response: Dish[] = [{
      _id: '',
      type: '',
      name: '',
      ingredients: [''],
      extra: 2
    }]

    spyOn(service.DishService, 'postDishService').and.returnValue(of(response))

    const spynext = spyOn(service.dishesAPI$, 'next')
    service.postDish(response)

    expect(spynext).toHaveBeenCalled()
  })

  it('When deleteDish is called, next method on dishesAPI$ to have been called', () => {
    const response: Dish = {
      _id: '',
      type: '',
      name: '',
      ingredients: [''],
      extra: 2
    }

    spyOn(service.DishService, 'deleteDishService').and.returnValue(of(response))

    const spynext = spyOn(service.dishesAPI$, 'next')
    service.deleteDish(response)

    expect(spynext).toHaveBeenCalled()
  }) */
})
