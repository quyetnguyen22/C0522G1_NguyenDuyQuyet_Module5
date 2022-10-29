import {Rank} from './rank';

export interface Customer {
  id?: number;
  name?: string;
  birthday?: string;
  gender?: number;
  idNum?: string;
  phone?: string;
  email?: string;
  address?: string;
  rank?: Rank;
}
