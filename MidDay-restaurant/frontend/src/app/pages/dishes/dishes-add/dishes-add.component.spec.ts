import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesAddComponent } from './dishes-add.component';

describe('DishesAddComponent', () => {
  let component: DishesAddComponent;
  let fixture: ComponentFixture<DishesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
