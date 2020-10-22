import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantProfileEditComponent } from './assistant-profile-edit.component';

describe('AssistantProfileEditComponent', () => {
  let component: AssistantProfileEditComponent;
  let fixture: ComponentFixture<AssistantProfileEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistantProfileEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistantProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
