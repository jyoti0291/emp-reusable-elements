import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFormBuilderComponent } from './event-form-builder.component';

describe('EventFormBuilderComponent', () => {
  let component: EventFormBuilderComponent;
  let fixture: ComponentFixture<EventFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
