import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { DishesComponent } from './dishes.component'
import { DishesAddComponent } from './dishes-add/dishes-add.component'
import { DishesSearchComponent } from './dishes-search/dishes-search.component'
import { MatDialogModule } from '@angular/material/dialog'
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'
import { MatButtonModule } from '@angular/material/button'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

describe('DishesComponent', () => {
  let component: DishesComponent
  let fixture: ComponentFixture<DishesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DishesComponent,
        DishesAddComponent,
        DishesSearchComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatButtonModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule

      ],
      providers: [FormBuilder],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should remove class', () => {
    const deleteClassSpy = spyOn(component.buttonDelete.classList, 'remove')

    component.deleteClass()

    expect(deleteClassSpy).toHaveBeenCalled()
  })
})
