import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { DishesComponent } from './dishes.component'
import { FormBuilder } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'

describe('DishesComponent', () => {
  let component: DishesComponent
  let fixture: ComponentFixture<DishesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DishesComponent],
      imports: [HttpClientTestingModule,
        RouterTestingModule],
      providers: [FormBuilder]
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
