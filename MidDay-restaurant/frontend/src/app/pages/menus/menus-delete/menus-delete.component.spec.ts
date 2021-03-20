import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'

import { MenusDeleteComponent } from './menus-delete.component'

describe('MenusDeleteComponent', () => {
  let component: MenusDeleteComponent
  let fixture: ComponentFixture<MenusDeleteComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenusDeleteComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, MatDialogModule],
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
})
