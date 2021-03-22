import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MenusDeleteComponent } from './menus-delete.component'

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
    const spyFn = spyOn(component.StoreService, 'getUserRestaurant').and.callThrough()

    component.deleteClick(id)

    expect(spyFn).toHaveBeenCalled()
  })
})
