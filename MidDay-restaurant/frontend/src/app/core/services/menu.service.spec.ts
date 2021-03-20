import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http'

import { MenuService } from './menu.service'
import { of } from 'rxjs'

describe('MenuService', () => {
  let service: MenuService
  let httpClientSpy: { post: jasmine.Spy }

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: HttpClient, useValue: httpClientSpy }]
    })
    service = TestBed.inject(MenuService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('postMenuService should be called', (done) => {
    const menu = {
      _id: 'string',
      firstCourse: [],
      secondCourse: [],
      dessert: [],
      price: 1,
      date: 'string'
    }
    httpClientSpy.post.and.returnValue(of({}))
    service.postMenuService(menu).subscribe(() => {
      expect(httpClientSpy.post.calls.count()).toBe(1)
      done()
    })
  })
})

describe('MenuService', () => {
  let service: MenuService
  let httpClientSpy: { delete: jasmine.Spy }

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['delete'])

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: HttpClient, useValue: httpClientSpy }]
    })
    service = TestBed.inject(MenuService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('deleteMenuService should be called', (done) => {
    const id = 'string'
    httpClientSpy.delete.and.returnValue(of({}))
    service.deleteMenuService(id).subscribe(() => {
      expect(httpClientSpy.delete.calls.count()).toBe(1)
      done()
    })
  })
})
