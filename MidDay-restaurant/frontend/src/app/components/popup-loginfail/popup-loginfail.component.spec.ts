import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { PopupLoginfailComponent } from './popup-loginfail.component'

describe('PopupLoginfailComponent', () => {
  let component: PopupLoginfailComponent
  let fixture: ComponentFixture<PopupLoginfailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupLoginfailComponent],
      imports: [MatDialogModule, BrowserAnimationsModule],
      providers: [
        MatDialog,
        { provide: MatDialog, useValue: {} }
      ],
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

  it('should call closeAll', () => {
    const spyFn = spyOn(component, 'closeDialog').and.callThrough()

    component.closeDialog()

    expect(spyFn).toHaveBeenCalled()
  })
})
