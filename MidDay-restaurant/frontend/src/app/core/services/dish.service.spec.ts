import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { DishService } from './dish.service'

describe('DishService', () => {
  let service: DishService

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
    service = TestBed.inject(DishService)

    service = TestBed.inject(DishService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})

describe('Given a postDish function', () => {
  let service: DishService
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DishService]
    })

    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(DishService)
  })

  afterEach(() => {
    httpTestingController.verify()
  })

  it('returned Observable should match the right data', () => {
    const mockDish = [{
      name: 'Paella'
    }]

    service.postDishService({ _id: 1 })
      .subscribe(dishData => {
        expect(dishData[0].name).toEqual('Paella')
      })

    const req = httpTestingController.expectOne('http://localhost:5000/api/v1/midday/dish')

    expect(req.request.method).toEqual('POST')

    req.flush(mockDish)
  })
})

describe('Given a deleteDish function', () => {
  let service: DishService
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DishService]
    })

    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(DishService)
  })

  afterEach(() => {
    httpTestingController.verify()
  })

  it('returned Observable should match the right data, and delete it', () => {
    const mockDish = [{
      name: 'Paella'
    }]

    service.deleteDishService('1')
      .subscribe(dishData => {
        expect(dishData[0].name).toEqual('Paella')
      })

    const req = httpTestingController.expectOne('http://localhost:5000/api/v1/midday/dish/1')

    expect(req.request.method).toEqual('DELETE')

    req.flush(mockDish)
  })
})
