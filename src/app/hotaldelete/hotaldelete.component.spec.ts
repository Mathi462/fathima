import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotaldeleteComponent } from './hotaldelete.component';

describe('HotaldeleteComponent', () => {
  let component: HotaldeleteComponent;
  let fixture: ComponentFixture<HotaldeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotaldeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotaldeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
