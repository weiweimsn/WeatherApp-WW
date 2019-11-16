import { TestBed } from '@angular/core/testing';

import { DarkskyWeatherServiceService } from './darksky-weather-service.service';

describe('YahooWeatherServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DarkskyWeatherServiceService = TestBed.get(DarkskyWeatherServiceService);
    expect(service).toBeTruthy();
  });
});
