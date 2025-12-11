import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioLiveComponent } from './radio-live.component';

describe('RadioLiveComponent', () => {
  let component: RadioLiveComponent;
  let fixture: ComponentFixture<RadioLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioLiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
