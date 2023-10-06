import { TestBed } from '@angular/core/testing';

import { BusquedaApiService } from './busqueda-api.service';

describe('BusquedaApiService', () => {
  let service: BusquedaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusquedaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
