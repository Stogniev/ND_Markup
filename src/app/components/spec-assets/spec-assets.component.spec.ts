import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecAssetsComponent } from './spec-assets.component';

describe('SpecAssetsComponent', () => {
  let component: SpecAssetsComponent;
  let fixture: ComponentFixture<SpecAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
