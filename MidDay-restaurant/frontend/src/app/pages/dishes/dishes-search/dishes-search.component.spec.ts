import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { DishesSearchComponent } from './dishes-search.component'
import { MatDialogModule } from '@angular/material/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'
import { of } from 'rxjs'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

describe('DishesSearchComponent', () => {
  let component: DishesSearchComponent
  let fixture: ComponentFixture<DishesSearchComponent>
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DishesSearchComponent],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [FormBuilder, {
        provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
        useValue: { appearance: 'fill' }
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesSearchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('call search method', () => {
    const searchValue = 'Paella'

    const searchDish = spyOn(component.searchTerms, 'next')

    component.search(searchValue)

    expect(searchDish).toHaveBeenCalled()
  })

  it('searchDish to have been called', () => {
    const id = 'string'

    httpClientSpy.get.and.returnValue(of([]))

    component.searchDish(id).subscribe(() => {
      expect(httpClientSpy.get.calls.count()).toBe(0)
    })
  })

  it('should call openPopUp', () => {
    const spyFn = spyOn(component, 'openPopUp').and.callThrough()
    const id = ('123')

    component.openPopUp(id)

    expect(spyFn).toHaveBeenCalled()
  })

  it('should call displayNone', () => {
    const spyFn = spyOn(component, 'displayNone').and.callThrough()
    const index = 1

    component.displayNone(index)

    expect(spyFn).toHaveBeenCalled()
  })

  it('should call getDishesForSearch at the OnInit', () => {
    const userRestaurant = {
      _id: 'string',
      userName: 'string',
      email: 'string',
      password: 'string',
      name: 'string',
      category: 'string',
      capacity: 1,
      phone: 1,
      street: 'string',
      number: 1,
      city: 'string',
      zipcode: 'string',
      image: 'string',
      menuprice: 1,
      bookings: [],
      menus: [],
      dishes: []
    }

    const spyFn = spyOn(component.StoreSRV, 'getDishesForSearch').and.returnValue(of(userRestaurant))

    component.ngOnInit()

    expect(spyFn).toHaveBeenCalled()
  })
})
