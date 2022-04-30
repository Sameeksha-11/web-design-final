import { TestBed } from '@angular/core/testing';

import { ExploredetailsService } from './exploredetails.service';

describe('ExploredetailsService', () => {
  let service: ExploredetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExploredetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
