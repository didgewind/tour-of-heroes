import { TestBed, inject } from '@angular/core/testing';

import { HeroesMockService } from './heroes-mock.service';

describe('HeroesMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroesMockService]
    });
  });

  it('should be created', inject([HeroesMockService], (service: HeroesMockService) => {
    expect(service).toBeTruthy();
  }));
});
