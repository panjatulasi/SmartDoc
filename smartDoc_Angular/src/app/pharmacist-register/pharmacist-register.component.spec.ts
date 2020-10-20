import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistRegisterComponent } from './pharmacist-register.component';

describe('PharmacistRegisterComponent', () => {
  let component: PharmacistRegisterComponent;
  let fixture: ComponentFixture<PharmacistRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
