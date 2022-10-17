import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firstNumber: number;
  secondNumber: number;
  operand: number;
  result: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  getResult(operand: string) {
    switch (operand) {
      case '+':
        return this.result = this.firstNumber + this.secondNumber;
      case '-':
        return this.result = this.firstNumber - this.secondNumber;
      case 'x':
        return this.result = this.firstNumber * this.secondNumber;
      case '/':
        if (this.secondNumber === 0) {
          return this.result = 'Number 2nd must be different to 0';
        }
        return this.result = this.firstNumber / this.secondNumber;
    }
  }
}
