import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFormRendererComponent } from './event-form-renderer.component';

describe('EventFormRendererComponent', () => {
  let component: EventFormRendererComponent;
  let fixture: ComponentFixture<EventFormRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventFormRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFormRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
