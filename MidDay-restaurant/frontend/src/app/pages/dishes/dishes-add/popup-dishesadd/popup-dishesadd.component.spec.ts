import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PopupDishesaddComponent } from './popup-dishesadd.component'

describe('PopupDishesaddComponent', () => {
  let component: PopupDishesaddComponent
  let fixture: ComponentFixture<PopupDishesaddComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupDishesaddComponent]
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
