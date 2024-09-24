import { TestBed } from '@angular/core/testing';

import { InvestmentService } from './investment-results.service';

describe('CalculateInvestmentResultsService', () => {
  let service: InvestmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
