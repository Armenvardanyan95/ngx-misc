import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlowTypeComponent } from './slow-type.component';

describe('SlowTypeComponent', () => {
  let component: SlowTypeComponent;
  let fixture: ComponentFixture<SlowTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlowTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlowTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
