import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { investmentService } from '../investment-results.service'


@Component({
  selector: 'investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-results.component.css'
})

export class  InvestmentResultComponent {

  constructor(public InvestmentService: investmentService) {
    
  }

 get data() {
  return investmentService.annualData
 }

    
}

