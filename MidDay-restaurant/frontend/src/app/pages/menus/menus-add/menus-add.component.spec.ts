import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusAddComponent } from './menus-add.component';

describe('MenusAddComponent', () => {
  let component: MenusAddComponent;
  let fixture: ComponentFixture<MenusAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenusAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
