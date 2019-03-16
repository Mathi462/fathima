import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteSeeingComponent } from './site-seeing.component';

describe('SiteSeeingComponent', () => {
  let component: SiteSeeingComponent;
  let fixture: ComponentFixture<SiteSeeingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteSeeingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteSeeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
