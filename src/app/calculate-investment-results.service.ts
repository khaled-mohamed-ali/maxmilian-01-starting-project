import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateInvestmentResultsService {
  private static calcData: any;

  constructor() {
  }


  static sendDataToCalc(userInvestment: any) {
     this.calcData = userInvestment;

  }

  ngOnInit() {

  }

  //    const annualData = [];
  //    let investmentValue = initialInvestment;
  //   let test: string = 'its work'
  //
  //   for (let i = 0; i < duration; i++) {
  //     const year = i + 1;
  //     const interestEarnedInYear = investmentValue * (expectedReturn / 100);
  //     investmentValue += interestEarnedInYear + annualInvestment;
  //     const totalInterest =
  //       investmentValue - annualInvestment * year - initialInvestment;
  //     annualData.push({
  //       year: year,
  //       interest: interestEarnedInYear,
  //       valueEndOfYear: investmentValue,
  //       annualInvestment: annualInvestment,
  //       totalInterest: totalInterest,
  //       totalAmountInvested: initialInvestment + annualInvestment * year,
  //     });
  //   }
  //
  //   return annualData;
  // }


}
