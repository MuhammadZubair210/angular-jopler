import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerVerficationComponent } from './employer-verfication.component';

describe('EmployerVerficationComponent', () => {
  let component: EmployerVerficationComponent;
  let fixture: ComponentFixture<EmployerVerficationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerVerficationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerVerficationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
