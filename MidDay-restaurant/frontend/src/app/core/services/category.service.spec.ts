import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { CategoryService } from './category.service'

describe('CategoryService', () => {
  let service: CategoryService

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
    service = TestBed.inject(CategoryService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
