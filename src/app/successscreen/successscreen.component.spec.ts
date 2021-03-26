import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SuccessscreenComponent } from './successscreen.component';

describe('SuccessscreenComponent', () => {
  let component: SuccessscreenComponent;
  let fixture: ComponentFixture<SuccessscreenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
