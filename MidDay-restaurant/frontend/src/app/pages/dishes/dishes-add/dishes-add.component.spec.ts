import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { DishesAddComponent } from './dishes-add.component'
import { FormBuilder } from '@angular/forms'

describe('DishesAddComponent', () => {
  let component: DishesAddComponent
  let fixture: ComponentFixture<DishesAddComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DishesAddComponent],
      providers: [FormBuilder]
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

  it('call postClick method', () => {
    const post = spyOn(component.StoreService, 'postDish')

    component.postClick()

    expect(post).toHaveBeenCalled()
  })
})
