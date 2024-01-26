import { TestBed } from '@angular/core/testing';

import { TvDataService } from './tv-data.service';

describe('TvDataService', () => {
  let service: TvDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
