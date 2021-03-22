import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatMenuModule } from '@angular/material/menu'
import { HeaderComponent } from './header.component'
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        MatMenuModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
        BrowserAnimationsModule
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
