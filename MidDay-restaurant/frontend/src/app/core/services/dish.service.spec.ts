import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { DishService } from './dish.service'
import { HttpClient } from '@angular/common/http'
import { of } from 'rxjs'

describe('DishService', () => {
  let service: DishService
  let httpClientSpy: { post: jasmine.Spy }

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: HttpClient, useValue: httpClientSpy }]
    })
    service = TestBed.inject(DishService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('postDishService should be called', (done) => {
    const dish = {
      _id: 'string',
      type: 'string',
      name: 'string',
      ingredients: [],
      extra: 1
    }
    httpClientSpy.post.and.returnValue(of({}))
    service.postDishService(dish).subscribe(() => {
      expect(httpClientSpy.post.calls.count()).toBe(1)
      done()
    })
  })
})

describe('DishService', () => {
  let service: DishService
  let httpClientSpy: { delete: jasmine.Spy }

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['delete'])

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: HttpClient, useValue: httpClientSpy }]
    })
    service = TestBed.inject(DishService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('deleteDishService should be called', (done) => {
    const id = 'string'

    httpClientSpy.delete.and.returnValue(of({}))
    service.deleteDishService(id).subscribe(() => {
      expect(httpClientSpy.delete.calls.count()).toBe(1)
      done()
    })
  })
})

describe('DishService', () => {
  let service: DishService
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: HttpClient, useValue: httpClientSpy }]
    })
    service = TestBed.inject(DishService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('getIngredientsService should be called', (done) => {
    httpClientSpy.get.and.returnValue(of({}))
    service.getIngredientsService().subscribe(() => {
      expect(httpClientSpy.get.calls.count()).toBe(1)
      done()
    })
  })
})
