import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MenusComponent } from './menus.component'
import { MatDialogModule } from '@angular/material/dialog'
import { MatMenuModule } from '@angular/material/menu'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button'
import { MenusAddComponent } from './menus-add/menus-add.component'
import { MenusDeleteComponent } from './menus-delete/menus-delete.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

describe('MenusComponent', () => {
  let component: MenusComponent
  let fixture: ComponentFixture<MenusComponent>
  let button: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MenusComponent,
        MenusAddComponent,
        MenusDeleteComponent
      ],
      providers: [FormBuilder, {
        provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
        useValue: { appearance: 'fill' }
      }],
      imports: [
        MatDialogModule,
        MatMenuModule,
        BrowserAnimationsModule,
        MatButtonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should call a deleteClass function', () => {
    const spyFn = spyOn(component, 'deleteClass').and.callThrough()
    button = fixture.nativeElement.querySelector('.btn-delete')
    button.click()
    expect(spyFn).toHaveBeenCalled()
  })
})
