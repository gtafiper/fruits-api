import { TestBed } from '@angular/core/testing';

import { Costumer.ServiceService } from './costumer.service.service';

describe('Costumer.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Costumer.ServiceService = TestBed.get(Costumer.ServiceService);
    expect(service).toBeTruthy();
  });
});
