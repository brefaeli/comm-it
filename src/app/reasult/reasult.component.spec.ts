import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasultComponent } from './reasult.component';

describe('ReasultComponent', () => {
  let component: ReasultComponent;
  let fixture: ComponentFixture<ReasultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReasultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
