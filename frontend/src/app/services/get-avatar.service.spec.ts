import { TestBed } from '@angular/core/testing';

import { GetAvatarService } from './get-avatar.service';

describe('GetAvatarService', () => {
  let service: GetAvatarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAvatarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
