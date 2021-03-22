import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialogModule } from '@angular/material/dialog'

import { PopupMenusdeleteComponent } from './popup-menusdelete.component'

describe('PopupMenusdeleteComponent', () => {
  let component: PopupMenusdeleteComponent
  let fixture: ComponentFixture<PopupMenusdeleteComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupMenusdeleteComponent],
      providers: [MatDialogModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupMenusdeleteComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
