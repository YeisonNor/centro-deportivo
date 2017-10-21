import { TestBed, inject } from '@angular/core/testing';

import { ServiceReservaService } from './service-reserva.service';

describe('ServiceReservaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceReservaService]
    });
  });

  it('should be created', inject([ServiceReservaService], (service: ServiceReservaService) => {
    expect(service).toBeTruthy();
  }));
});
