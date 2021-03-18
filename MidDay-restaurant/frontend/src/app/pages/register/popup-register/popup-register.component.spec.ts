import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupRegisterComponent } from './popup-register.component';

describe('PopupRegisterComponent', () => {
  let component: PopupRegisterComponent;
  let fixture: ComponentFixture<PopupRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
