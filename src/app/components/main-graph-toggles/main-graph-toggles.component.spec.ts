import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGraphTogglesComponent } from './main-graph-toggles.component';

describe('MainGraphTogglesComponent', () => {
  let component: MainGraphTogglesComponent;
  let fixture: ComponentFixture<MainGraphTogglesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainGraphTogglesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGraphTogglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
