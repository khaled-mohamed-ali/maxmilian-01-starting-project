import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CalculateInvestmentResultsService} from "../calculate-investment-results.service";



type UserInvest = {
  initialInvestment: string,
  expectedReturn: string,
  annualInvestment: string,
  duration: string
}

@Component({
  selector: 'user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})



export class UserInputComponent {

  constructor(private  service: CalculateInvestmentResultsService) {
  }

  userInvestment:  UserInvest = {
    initialInvestment: '',
    expectedReturn: '',
    annualInvestment: '',
    duration: ''
  }






  onSubmit() {
    CalculateInvestmentResultsService.sendDataToCalc(this.userInvestment)
  }


}
