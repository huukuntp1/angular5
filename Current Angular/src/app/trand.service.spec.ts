import { TestBed, inject } from '@angular/core/testing';

import { TrandService } from './trand.service';

describe('TrandService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrandService]
    });
  });

  it('should be created', inject([TrandService], (service: TrandService) => {
    expect(service).toBeTruthy();
  }));
});
