import { Component } from '@angular/core';
import {InvestmentResultsService} from "../investment-results.service";
import {CurrencyPipe}  from '@angular/common';
@Component({
  selector: 'investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultComponent {
  enteredData: any[] = [];

  constructor(private  service: InvestmentResultsService) {
    this.enteredData = InvestmentResultsService.annualData;
    console.log(this.enteredData)
  }


}
