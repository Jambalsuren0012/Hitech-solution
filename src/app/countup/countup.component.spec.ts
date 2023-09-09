import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountupComponent } from './countup.component';

describe('CountupComponent', () => {
  let component: CountupComponent;
  let fixture: ComponentFixture<CountupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountupComponent]
    });
    fixture = TestBed.createComponent(CountupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
