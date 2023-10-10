import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupsComponent } from './form-groups.component';

describe('FormGroupsComponent', () => {
  let component: FormGroupsComponent;
  let fixture: ComponentFixture<FormGroupsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormGroupsComponent]
    });
    fixture = TestBed.createComponent(FormGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
