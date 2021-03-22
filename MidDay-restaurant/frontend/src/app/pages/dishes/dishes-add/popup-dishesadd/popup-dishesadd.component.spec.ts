import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialogModule } from '@angular/material/dialog'

import { PopupDishesaddComponent } from './popup-dishesadd.component'

describe('PopupDishesaddComponent', () => {
  let component: PopupDishesaddComponent
  let fixture: ComponentFixture<PopupDishesaddComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupDishesaddComponent],
      imports: [MatDialogModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDishesaddComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
