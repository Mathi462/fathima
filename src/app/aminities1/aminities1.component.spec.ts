import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aminities1Component } from './aminities1.component';

describe('Aminities1Component', () => {
  let component: Aminities1Component;
  let fixture: ComponentFixture<Aminities1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aminities1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aminities1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
