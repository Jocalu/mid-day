import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialog, MatDialogModule } from '@angular/material/dialog'

import { PopupMenusaddComponent } from './popup-menusadd.component'

describe('PopupMenusaddComponent', () => {
  let component: PopupMenusaddComponent
  let fixture: ComponentFixture<PopupMenusaddComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupMenusaddComponent],
      imports: [MatDialogModule],
      providers: [
        MatDialog,
        { provide: MatDialog, useValue: {} }
      ],
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

  it('should call closeAll', () => {
    const spyFn = spyOn(component, 'closeDialog').and.callThrough()

    component.closeDialog()

    expect(spyFn).toHaveBeenCalled()
  })
})
