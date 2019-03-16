import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbActivityComponent } from './db-activity.component';

describe('DbActivityComponent', () => {
  let component: DbActivityComponent;
  let fixture: ComponentFixture<DbActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
