import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialogModule } from '@angular/material/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { PopupLoginfailComponent } from './popup-loginfail.component'

describe('PopupLoginfailComponent', () => {
  let component: PopupLoginfailComponent
  let fixture: ComponentFixture<PopupLoginfailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupLoginfailComponent],
      imports: [MatDialogModule, BrowserAnimationsModule],

      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupLoginfailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
