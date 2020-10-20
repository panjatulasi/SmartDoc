import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalRelatedComponent } from './hospital-related.component';

describe('HospitalRelatedComponent', () => {
  let component: HospitalRelatedComponent;
  let fixture: ComponentFixture<HospitalRelatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalRelatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
