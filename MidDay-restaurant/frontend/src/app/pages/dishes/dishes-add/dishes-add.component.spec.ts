import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { DishesAddComponent } from './dishes-add.component'
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { of } from 'rxjs'
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

describe('DishesAddComponent', () => {
  let component: DishesAddComponent
  let fixture: ComponentFixture<DishesAddComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatDialogModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [DishesAddComponent],
      providers: [FormBuilder, {
        provide: MatDialogRef,
        MAT_FORM_FIELD_DEFAULT_OPTIONS,
        useValue: {}
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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

    const spyFn = spyOn(component.StoreSRV, 'postDish').and.returnValue(of(dishValue))

    component.postClick()

    expect(spyFn).toHaveBeenCalled()
  })

  it('should call getIngredients', () => {
    const ingredients = [{
      category: 'string',
      ingredient: []
    }]

    const spyFn = spyOn(component.StoreSRV, 'getIngredients').and.returnValue(of(ingredients))

    component.ngOnInit()

    expect(spyFn).toHaveBeenCalled()
  })
})
