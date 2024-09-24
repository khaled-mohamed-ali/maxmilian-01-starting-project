import { Injectable } from '@angular/core';
import  { investmentData } from './result-service';

@Injectable({
  providedIn: 'root'
})
export class investmentService {
  static annualData: any  = [];

  calculateInvestmentResults(data: investmentData) {
    investmentService.annualData = []
    const {
      initialInvestment,
      duration,
      expectedReturn,
      annualInvestment } = data

    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
        investmentService.annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    return investmentService.annualData 
  }
}



