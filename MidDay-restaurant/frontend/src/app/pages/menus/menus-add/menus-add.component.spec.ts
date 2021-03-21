import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormBuilder } from '@angular/forms'
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MenusAddComponent } from './menus-add.component'

describe('MenusAddComponent', () => {
  let component: MenusAddComponent
  let fixture: ComponentFixture<MenusAddComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule,
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule],
      declarations: [MenusAddComponent],
      providers: [FormBuilder, {
        provide: MatDialogRef,
        useValue: {}
      }]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusAddComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should call openPopUp', () => {
    const spyFn = spyOn(component, 'openPopUp').and.callThrough()

    component.openPopUp()

    expect(spyFn).toHaveBeenCalled()
  })

  it('should call postClick', () => {
    const spyFn = spyOn(component, 'postClick').and.callThrough()

    component.postClick()

    expect(spyFn).toHaveBeenCalled()
  })
})
