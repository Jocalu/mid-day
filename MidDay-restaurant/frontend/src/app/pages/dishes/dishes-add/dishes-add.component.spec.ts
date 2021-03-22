import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { DishesAddComponent } from './dishes-add.component'
import { FormBuilder } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { of } from 'rxjs'

describe('DishesAddComponent', () => {
  let component: DishesAddComponent
  let fixture: ComponentFixture<DishesAddComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        RouterTestingModule,
        MatDialogModule,
        BrowserAnimationsModule],
      declarations: [DishesAddComponent],
      providers: [FormBuilder, {
        provide: MatDialogRef,
        useValue: {}
      }]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesAddComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should call openPopUp', () => {
    const spyFn = spyOn(component, 'openPopUp').and.callThrough()

    component.openPopUp()

    expect(spyFn).toHaveBeenCalled()
  })

  it('should call postClick', () => {
    const spyFn = spyOn(component, 'postClick').and.callThrough()

    component.postClick()

    expect(spyFn).toHaveBeenCalled()
  })

  it('should call postDish', () => {
    const dishValue = {
      _id: 'string',
      type: 'string',
      name: 'string',
      ingredients: [],
      extra: 1
    }

    const spyFn = spyOn(component.StoreService, 'postDish').and.returnValue(of(dishValue))

    component.postClick()

    expect(spyFn).toHaveBeenCalled()
  })

  it('should call getIngredients', () => {
    const ingredients = [{
      category: 'string',
      ingredient: []
    }]

    const spyFn = spyOn(component.StoreService, 'getIngredients').and.returnValue(of(ingredients))

    component.ngOnInit()

    expect(spyFn).toHaveBeenCalled()
  })
})
