import {Customer} from './customer';

export interface SavingBook {
  id: number;
  customer: Customer;
  openDate: string;
  savingDate: string;
  period: number;
  amount: number;
  interest: number;
  promotion: string;
}
