import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PopupLoginfailComponent } from './popup-loginfail.component'

describe('PopupLoginfailComponent', () => {
  let component: PopupLoginfailComponent
  let fixture: ComponentFixture<PopupLoginfailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupLoginfailComponent]
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
