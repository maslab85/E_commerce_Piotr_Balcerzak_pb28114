import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdeersComponent } from './ordeers.component';

describe('OrdeersComponent', () => {
  let component: OrdeersComponent;
  let fixture: ComponentFixture<OrdeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdeersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
