import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyOfProvacityComponent } from './policy-of-provacity.component';

describe('PolicyOfProvacityComponent', () => {
  let component: PolicyOfProvacityComponent;
  let fixture: ComponentFixture<PolicyOfProvacityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyOfProvacityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyOfProvacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
