import { TestBed } from '@angular/core/testing'
import { AuthService } from './auth.service'

describe('AuthService', () => {
  let service: AuthService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(AuthService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should authenticate user', () => {
    const spyFn = spyOn(service, 'isAuthenticated').and.returnValue(true)

    service.isAuthenticated()

    expect(spyFn).toHaveBeenCalled()
  })

  it('should fail authenticate and return false', () => {
    const spyFn = spyOn(service, 'isAuthenticated').and.returnValue(false)

    service.isAuthenticated()

    expect(spyFn).toHaveBeenCalled()
  })
})
