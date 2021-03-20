import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormBuilder } from '@angular/forms'
import { MenusComponent } from './menus.component'
import { MatDialogModule } from '@angular/material/dialog'
import { MatMenuModule } from '@angular/material/menu'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

describe('MenusComponent', () => {
  let component: MenusComponent
  let fixture: ComponentFixture<MenusComponent>
  let button: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenusComponent], providers: [FormBuilder], imports: [MatDialogModule, MatMenuModule, BrowserAnimationsModule]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should return a button with text añadir', () => {
    button = fixture.nativeElement.querySelector('.add')
    expect(button.textContent).toEqual(' AÑADIR ')
  })

  it('should call a deleteClass function', () => {
    const spyFn = spyOn(component, 'deleteClass').and.callThrough()
    button = fixture.nativeElement.querySelector('.btn-delete')
    button.click()
    expect(spyFn).toHaveBeenCalled()
  })
})
