import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialogModule } from '@angular/material/dialog'

import { PopupRegisterComponent } from './popup-register.component'

describe('PopupRegisterComponent', () => {
  let component: PopupRegisterComponent
  let fixture: ComponentFixture<PopupRegisterComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupRegisterComponent],
      imports: [MatDialogModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupRegisterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
