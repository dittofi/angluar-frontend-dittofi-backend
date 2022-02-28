import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunEndpointFormComponent } from './run-endpoint-form.component';

describe('RunEndpointFormComponent', () => {
  let component: RunEndpointFormComponent;
  let fixture: ComponentFixture<RunEndpointFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunEndpointFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunEndpointFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
