import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatMenuModule } from '@angular/material/menu'
import { HeaderComponent } from './header.component'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>
  let button: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent], imports: [MatMenuModule]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should return a button with text menu', () => {
    button = fixture.nativeElement.querySelectorAll('button')[0]
    expect(button.textContent).toEqual('menu')
  })
})
