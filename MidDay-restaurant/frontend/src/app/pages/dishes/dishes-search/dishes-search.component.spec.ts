import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { DishesSearchComponent } from './dishes-search.component'
import { MatDialogModule } from '@angular/material/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormBuilder } from '@angular/forms'

describe('DishesSearchComponent', () => {
  let component: DishesSearchComponent
  let fixture: ComponentFixture<DishesSearchComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DishesSearchComponent],
      imports: [HttpClientTestingModule, MatDialogModule, BrowserAnimationsModule],
      providers: [FormBuilder]

    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesSearchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('call deleteClick method', () => {
    const deleteDish = spyOn(component.StoreService, 'deleteDish')
    const id = '1'

    component.deleteClick(id)

    expect(deleteDish).toHaveBeenCalled()
  })

  it('call search method', () => {
    const searchValue = 'Paella'

    const searchDish = spyOn(component.searchTerms, 'next')

    component.search(searchValue)

    expect(searchDish).toHaveBeenCalled()
  })

  it('openPoPup', () => {
    const matDialog = new MatDialogMock()

    const openModal = spyOn(matDialog, 'open')
    component.openPopUp()
    expect(openModal).toHaveBeenCalled()
  })
})

export class MatDialogMock {
  open () {
  }
}
