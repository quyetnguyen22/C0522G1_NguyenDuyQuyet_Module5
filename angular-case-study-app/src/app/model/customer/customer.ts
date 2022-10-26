import {Rank} from './rank';
import {DatePipe} from '@angular/common';

export interface Customer {
  id?: number;
  name?: string;
  birthday?: DatePipe;
  gender?: number;
  idNum?: string;
  phone?: string;
  email?: string;
  address?: string;
  rank?: Rank;
}
