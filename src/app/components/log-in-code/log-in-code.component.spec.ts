import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInCodeComponent } from './log-in-code.component';

describe('LogInCodeComponent', () => {
  let component: LogInCodeComponent;
  let fixture: ComponentFixture<LogInCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
