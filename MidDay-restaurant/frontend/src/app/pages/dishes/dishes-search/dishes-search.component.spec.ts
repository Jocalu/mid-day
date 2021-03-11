import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesSearchComponent } from './dishes-search.component';

describe('DishesSearchComponent', () => {
  let component: DishesSearchComponent;
  let fixture: ComponentFixture<DishesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishesSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
