import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbBookingComponent } from './db-booking.component';

describe('DbBookingComponent', () => {
  let component: DbBookingComponent;
  let fixture: ComponentFixture<DbBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
