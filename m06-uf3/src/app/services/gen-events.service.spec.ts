import { TestBed } from '@angular/core/testing';

import { GenEventsService } from './gen-events.service';

describe('GenEventsService', () => {
  let service: GenEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
