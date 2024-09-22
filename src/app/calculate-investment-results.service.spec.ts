import { TestBed } from '@angular/core/testing';

import { InvestmentResultsService } from './investment-results.service';

describe('CalculateInvestmentResultsService', () => {
  let service: InvestmentResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestmentResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
