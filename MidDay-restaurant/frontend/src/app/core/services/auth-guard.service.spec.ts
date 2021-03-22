import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AuthGuardService } from './auth-guard.service'

describe('AuthGuardService', () => {
  let service: AuthGuardService

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule] })
    service = TestBed.inject(AuthGuardService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should authenticate user', () => {
    const spyFn = spyOn(service.authService, 'isAuthenticated').and.returnValue(true)

    service.canActivate()

    expect(spyFn).toHaveBeenCalled()
  })

  it('should navigate to home', () => {
    const spyFn = spyOn(service.authService, 'isAuthenticated').and.returnValue(false)

    service.canActivate()

    expect(spyFn).toHaveBeenCalled()
  })
})
