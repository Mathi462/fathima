import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDetailsBlockComponent } from './room-details-block.component';

describe('RoomDetailsBlockComponent', () => {
  let component: RoomDetailsBlockComponent;
  let fixture: ComponentFixture<RoomDetailsBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomDetailsBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDetailsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
