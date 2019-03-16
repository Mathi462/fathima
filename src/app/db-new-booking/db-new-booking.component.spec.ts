import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbNewBookingComponent } from './db-new-booking.component';

describe('DbNewBookingComponent', () => {
  let component: DbNewBookingComponent;
  let fixture: ComponentFixture<DbNewBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbNewBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbNewBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
