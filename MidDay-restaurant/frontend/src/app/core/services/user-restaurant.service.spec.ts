import { TestBed } from '@angular/core/testing'

import { UserRestaurantService } from './user-restaurant.service'

describe('UserRestaurantService', () => {
  let service: UserRestaurantService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(UserRestaurantService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
