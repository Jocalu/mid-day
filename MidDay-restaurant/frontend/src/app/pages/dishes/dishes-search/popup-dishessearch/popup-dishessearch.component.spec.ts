import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PopupDishessearchComponent } from './popup-dishessearch.component'

describe('PopupDishessearchComponent', () => {
  let component: PopupDishessearchComponent
  let fixture: ComponentFixture<PopupDishessearchComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupDishessearchComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDishessearchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
