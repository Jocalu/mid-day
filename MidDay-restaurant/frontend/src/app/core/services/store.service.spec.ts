import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { StoreService } from './store.service'
import { RouterTestingModule } from '@angular/router/testing'
import { of } from 'rxjs'
import { RouterModule } from '@angular/router'
import { HomeComponent } from '../../pages/home/home.component'

describe('StoreService', () => {
  let service: StoreService
  let httpClientSpy: { post: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([{ path: 'home', component: HomeComponent }]),
        RouterModule.forRoot([])
      ]
    })
    service = TestBed.inject(StoreService)
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('postDish should be called', () => {
    const dish = {
      _id: 'string',
      type: 'string',
      name: 'string',
      ingredients: [],
      extra: 1
    }

    httpClientSpy.post.and.returnValue(of([]))
    service.postDish(dish).subscribe(() => {
      expect(httpClientSpy.post.calls.count()).toBe(1)
    })
  })

  it('postMenu should be called', () => {
    const menu = {
      _id: 'string',
      firstCourse: [],
      secondCourse: [],
      dessert: [],
      price: 1,
      date: 'string'
    }

    httpClientSpy.post.and.returnValue(of([]))
    service.postMenu(menu).subscribe(() => {
      expect(httpClientSpy.post.calls.count()).toBe(1)
    })
  })

  it('addMenuRestaurant should be called', () => {
    const id = 'string'
    const data = {}

    httpClientSpy.post.and.returnValue(of([]))
    service.addMenuRestaurant(id, data).subscribe(() => {
      expect(httpClientSpy.post.calls.count()).toBe(1)
    })
  })

  it('addDishRestaurant should be called', () => {
    const id = 'string'
    const data = {}

    httpClientSpy.post.and.returnValue(of([]))
    service.addDishRestaurant(id, data).subscribe(() => {
      expect(httpClientSpy.post.calls.count()).toBe(1)
    })
  })

  it('loginUserRestaurant should be called', () => {
    const user = {
      _id: 'string',
      userName: 'string',
      email: 'string',
      password: 'string',
      name: 'string',
      category: 'string',
      capacity: 1,
      phone: 1,
      street: 'string',
      number: 1,
      city: 'string',
      zipcode: 'string',
      image: 'string',
      menuprice: 1,
      bookings: [],
      menus: [],
      dishes: []
    }

    httpClientSpy.post.and.returnValue(of([]))
    service.loginUserRestaurant(user).subscribe(() => {
      expect(httpClientSpy.post.calls.count()).toBe(1)
    })
  })

  it('registerUserRestaurant should be called', () => {
    const user = {
      _id: 'string',
      userName: 'string',
      email: 'string',
      password: 'string',
      name: 'string',
      category: 'string',
      capacity: 1,
      phone: 1,
      street: 'string',
      number: 1,
      city: 'string',
      zipcode: 'string',
      image: 'string',
      menuprice: 1,
      bookings: [],
      menus: [],
      dishes: []
    }

    httpClientSpy.post.and.returnValue(of([]))
    service.registerUserRestaurant(user, user, user).subscribe(() => {
      expect(httpClientSpy.post.calls.count()).toBe(1)
    })
  })
})

describe('StoreService', () => {
  let service: StoreService
  let httpClientSpy: { put: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule, RouterTestingModule] })
    service = TestBed.inject(StoreService)
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['put'])
  })

  it('updateUserRestaurant should be called', () => {
    const id = 'string'
    const data = {}

    httpClientSpy.put.and.returnValue(of([]))
    service.updateUserRestaurant(id, data).subscribe(() => {
      expect(httpClientSpy.put.calls.count()).toBe(1)
    })
  })
})

describe('StoreService', () => {
  let service: StoreService
  let httpClientSpy: { delete: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([{ path: 'home', component: HomeComponent }]),
        RouterModule.forRoot([])
      ]
    })

    service = TestBed.inject(StoreService)
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['delete'])
  })

  it('deleteDish should be called', () => {
    const id = 'string'

    httpClientSpy.delete.and.returnValue(of([]))
    service.deleteDish(id).subscribe(() => {
      expect(httpClientSpy.delete.calls.count()).toBe(1)
    })
  })

  it('deleteMenu should be called', () => {
    const id = 'string'

    httpClientSpy.delete.and.returnValue(of([]))
    service.deleteMenu(id).subscribe(() => {
      expect(httpClientSpy.delete.calls.count()).toBe(1)
    })
  })
})
