import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {InvestmentResultsService} from "../investment-results.service";



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

  constructor(private  service: InvestmentResultsService) {
  }

  userInvestment:  UserInvest = {
    initialInvestment: '',
    expectedReturn: '',
    annualInvestment: '',
    duration: ''
  }






  onSubmit() {
    InvestmentResultsService.userData(this.userInvestment)
  }


}
