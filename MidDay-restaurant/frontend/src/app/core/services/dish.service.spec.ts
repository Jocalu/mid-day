import { TestBed } from '@angular/core/testing'

import { DishStoreService } from './dish.service'

describe('DishService', () => {
  let service: DishStoreService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(DishStoreService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
