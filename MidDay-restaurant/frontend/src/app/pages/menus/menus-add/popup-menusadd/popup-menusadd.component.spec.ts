import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialogModule } from '@angular/material/dialog'

import { PopupMenusaddComponent } from './popup-menusadd.component'

describe('PopupMenusaddComponent', () => {
  let component: PopupMenusaddComponent
  let fixture: ComponentFixture<PopupMenusaddComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupMenusaddComponent],
      imports: [MatDialogModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupMenusaddComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
