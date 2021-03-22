import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { PopupDishessearchComponent } from './popup-dishessearch.component'
import { RouterTestingModule } from '@angular/router/testing'
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

describe('PopupDishessearchComponent', () => {
  let component: PopupDishessearchComponent
  let fixture: ComponentFixture<PopupDishessearchComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupDishessearchComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule
      ],
      providers: [{
        provide: MatDialogRef,
        useValue: {}
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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

  it('should call deleteHandleClick', () => {
    const spyFn = spyOn(component, 'deleteHandleClick').and.callThrough()
    const dishId = '123'
    component.deleteHandleClick(dishId)

    expect(spyFn).toHaveBeenCalled()
  })

  it('should call deleteCanceled', () => {
    const spyFn = spyOn(component, 'deleteCanceled').and.callThrough()

    component.deleteCanceled()

    expect(spyFn).toHaveBeenCalled()
  })
})
