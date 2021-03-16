import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMenusaddComponent } from './popup-menusadd.component';

describe('PopupMenusaddComponent', () => {
  let component: PopupMenusaddComponent;
  let fixture: ComponentFixture<PopupMenusaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupMenusaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupMenusaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
