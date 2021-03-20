import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormBuilder } from '@angular/forms'
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { MenusAddComponent } from './menus-add.component'

describe('MenusAddComponent', () => {
  let component: MenusAddComponent
  let fixture: ComponentFixture<MenusAddComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [MenusAddComponent],
      providers: [FormBuilder, {
        provide: MatDialogRef,
        useValue: {}
      }]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusAddComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
