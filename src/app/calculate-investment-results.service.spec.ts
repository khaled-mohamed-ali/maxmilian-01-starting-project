import { TestBed } from '@angular/core/testing';

import { CalculateInvestmentResultsService } from './calculate-investment-results.service';

describe('CalculateInvestmentResultsService', () => {
  let service: CalculateInvestmentResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateInvestmentResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
