import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistProfileEditComponent } from './pharmacist-profile-edit.component';

describe('PharmacistProfileEditComponent', () => {
  let component: PharmacistProfileEditComponent;
  let fixture: ComponentFixture<PharmacistProfileEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistProfileEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
