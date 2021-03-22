import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { UserRestaurantService } from './user-restaurant.service'
import { HttpClient } from '@angular/common/http'
import { of } from 'rxjs'

describe('UserRestaurantService', () => {
  let service: UserRestaurantService
  let httpClientSpy: { post: jasmine.Spy }

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: HttpClient, useValue: httpClientSpy }]

    })

    service = TestBed.inject(UserRestaurantService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('registerRestaurantService should be called', (done) => {
    const User = {
      _id: 'string',
      userName: 'string',
      email: 'string',
      password: 'string',
      name: 'string',
      category: 'string',
      capacity: 2,
      phone: 2,
      street: 'string',
      number: 2,
      city: 'string',
      zipcode: 'string',
      image: 'string',
      menuprice: 2,
      bookings: [],
      menus: [],
      dishes: []
    }
    httpClientSpy.post.and.returnValue(of({}))
    service.registerRestaurantService(User).subscribe(() => {
      expect(httpClientSpy.post.calls.count()).toBe(1)
      done()
    })
  })

  it('loginRestaurantService should be called', (done) => {
    const User = {
      _id: 'string',
      userName: 'string',
      email: 'string',
      password: 'string',
      name: 'string',
      category: 'string',
      capacity: 2,
      phone: 2,
      street: 'string',
      number: 2,
      city: 'string',
      zipcode: 'string',
      image: 'string',
      menuprice: 2,
      bookings: [],
      menus: [],
      dishes: []
    }
    httpClientSpy.post.and.returnValue(of({}))
    service.loginRestaurantService(User).subscribe(() => {
      expect(httpClientSpy.post.calls.count()).toBe(1)
      done()
    })
  })

  it('addMenuService should be called', (done) => {
    const id = 'string'
    const data = {}
    httpClientSpy.post.and.returnValue(of({}))
    service.addMenuService(id, data).subscribe(() => {
      expect(httpClientSpy.post.calls.count()).toBe(1)
      done()
    })
  })
  it('addDishService should be called', (done) => {
    const id = 'string'
    const data = {}
    httpClientSpy.post.and.returnValue(of({}))
    service.addDishService(id, data).subscribe(() => {
      expect(httpClientSpy.post.calls.count()).toBe(1)
      done()
    })
  })
})

describe('UserRestaurantService', () => {
  let service: UserRestaurantService
  let httpClientSpy: { put: jasmine.Spy }

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['put'])

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: HttpClient, useValue: httpClientSpy }]
    })

    service = TestBed.inject(UserRestaurantService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('updateRestaurantService should be called', (done) => {
    const id = 'string'
    const data = {}
    httpClientSpy.put.and.returnValue(of({}))
    service.updateRestaurantService(id, data).subscribe(() => {
      expect(httpClientSpy.put.calls.count()).toBe(1)
      done()
    })
  })
})
