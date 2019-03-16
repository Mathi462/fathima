import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBlackComponent } from './home-black.component';

describe('HomeBlackComponent', () => {
  let component: HomeBlackComponent;
  let fixture: ComponentFixture<HomeBlackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBlackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
