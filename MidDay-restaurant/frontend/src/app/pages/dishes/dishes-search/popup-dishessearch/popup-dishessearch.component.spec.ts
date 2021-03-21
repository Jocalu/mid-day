import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { PopupDishessearchComponent } from './popup-dishessearch.component'
import { RouterTestingModule } from '@angular/router/testing'
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'

describe('PopupDishessearchComponent', () => {
  let component: PopupDishessearchComponent
  let fixture: ComponentFixture<PopupDishessearchComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupDishessearchComponent],
      imports: [HttpClientTestingModule,
        RouterTestingModule,
        MatDialogModule],
      providers: [{
        provide: MatDialogRef,
        useValue: {}
      }]
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
