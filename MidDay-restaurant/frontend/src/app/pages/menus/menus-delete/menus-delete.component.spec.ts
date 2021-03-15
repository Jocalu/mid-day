import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusDeleteComponent } from './menus-delete.component';

describe('MenusDeleteComponent', () => {
  let component: MenusDeleteComponent;
  let fixture: ComponentFixture<MenusDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenusDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
