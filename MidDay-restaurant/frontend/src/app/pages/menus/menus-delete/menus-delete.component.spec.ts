import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MenusDeleteComponent } from './menus-delete.component'
import { of } from 'rxjs'

describe('MenusDeleteComponent', () => {
  let component: MenusDeleteComponent
  let fixture: ComponentFixture<MenusDeleteComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenusDeleteComponent],
      imports: [HttpClientTestingModule,
        RouterTestingModule,
        MatDialogModule,
        BrowserAnimationsModule],
      providers: [{
        provide: MatDialogRef,
        useValue: {}
      }]

    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusDeleteComponent)
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

  it('should call deleteClick', () => {
    const spyFn = spyOn(component, 'deleteClick').and.callThrough()
    const id = '123'

    component.deleteClick(id)

    expect(spyFn).toHaveBeenCalled()
  })

  it('should call getUserRestaurant', () => {
    const id = '123'
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

    const spyFn = spyOn(component.StoreService, 'getUserRestaurant').and.returnValue(of(userRestaurant))

    component.deleteClick(id)

    expect(spyFn).toHaveBeenCalled()
  })

  it('should call getUserRestaurant at the OnInit', () => {
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

    const spyFn = spyOn(component.StoreService, 'getUserRestaurant').and.returnValue(of(userRestaurant))

    component.ngOnInit()

    expect(spyFn).toHaveBeenCalled()
  })
})
