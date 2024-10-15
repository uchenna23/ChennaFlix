import { TestBed } from '@angular/core/testing';

import { TmdbMediaContentService } from './tmdb-media-content.service';

describe('TmdbMediaContentService', () => {
  let service: TmdbMediaContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TmdbMediaContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
