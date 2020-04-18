import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletDemoOldComponent } from './leaflet-demo-old.component';

describe('LeafletDemoOldComponent', () => {
  let component: LeafletDemoOldComponent;
  let fixture: ComponentFixture<LeafletDemoOldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafletDemoOldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafletDemoOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
