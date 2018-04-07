import { TestBed, inject } from '@angular/core/testing';

import { HeroesRestService } from './heroes-rest.service';

describe('HeroesRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroesRestService]
    });
  });

  it('should be created', inject([HeroesRestService], (service: HeroesRestService) => {
    expect(service).toBeTruthy();
  }));
});
