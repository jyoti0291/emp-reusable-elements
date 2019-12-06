import { TestBed } from '@angular/core/testing';

import { CommonLayoutService } from './common-layout.service';

describe('CommonLayoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonLayoutService = TestBed.get(CommonLayoutService);
    expect(service).toBeTruthy();
  });
});
