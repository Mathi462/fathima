import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomParallaxComponent } from './room-parallax.component';

describe('RoomParallaxComponent', () => {
  let component: RoomParallaxComponent;
  let fixture: ComponentFixture<RoomParallaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomParallaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
