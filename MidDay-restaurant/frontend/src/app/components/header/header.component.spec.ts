import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatMenuModule } from '@angular/material/menu'
import { HeaderComponent } from './header.component'
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>
  let button: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MatMenuModule,
        MatDialogModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        }
      ]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should return a button with text menu', () => {
    button = fixture.nativeElement.querySelectorAll('button')[0]
    expect(button.textContent).toEqual('menu')
  })

  it('should call openLogin', () => {
    const spyFn = spyOn(component, 'openLogin').and.callThrough()
    const compiled = fixture.nativeElement
    const loginButton = compiled.querySelector('.btn-login')
    loginButton.click()
    expect(spyFn).toHaveBeenCalled()
  })

  it('should call logOut', () => {
    const spyFn = spyOn(component, 'logOut').and.callThrough()
    const compiled = fixture.nativeElement
    const logoutButton = compiled.querySelector('.btn-logOut')
    logoutButton.click()
    expect(spyFn).toHaveBeenCalled()
  })
})
