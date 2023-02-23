import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureCardComponent } from './failure-card.component';

describe('FailureCardComponent', () => {
  let component: FailureCardComponent;
  let fixture: ComponentFixture<FailureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailureCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FailureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
