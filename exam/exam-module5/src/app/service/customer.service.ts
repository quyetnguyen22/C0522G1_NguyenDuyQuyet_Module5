import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
import {environment} from '../../environments/environment';
import {SavingBook} from '../model/saving-book';

const API_URL = `${environment.customerUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL);
  }

  editCustomer(customer: Customer): Observable<void> {
    return this.http.patch<void>(API_URL + '/' + customer.id, customer);
  }
}
