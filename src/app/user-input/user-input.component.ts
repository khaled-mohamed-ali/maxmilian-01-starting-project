import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {investmentService} from "../investment-results.service";




@Component({
  selector: 'user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})



export class UserInputComponent {

  constructor(private  investmentService: investmentService) {
  }

    entredinitialInvestment ='1'
    entredExpectedReturn ='1'
    entredLInvestment= '5' 
    entredDuration= '10'
  

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: + this.entredinitialInvestment,
      duration: + this.entredDuration,
      expectedReturn : + this.entredExpectedReturn,
      annualInvestment : + this.entredinitialInvestment
    })

  
  }



}
