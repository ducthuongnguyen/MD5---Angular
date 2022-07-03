import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemFormStudentComponent } from './tem-form-student.component';

describe('TemFormStudentComponent', () => {
  let component: TemFormStudentComponent;
  let fixture: ComponentFixture<TemFormStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemFormStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemFormStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
