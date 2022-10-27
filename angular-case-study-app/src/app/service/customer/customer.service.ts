import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../../model/customer/customer';
import {environment} from '../../../environments/environment';

const URL_API = `${environment.url}`;

@Injectable({
  providedIn: 'root'
})

// URL_API = 'http://localhost:8080';

export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(URL_API + '/list');
  }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(URL_API + '/' + id);
  }

  addNew(customer: Customer): Observable<void> {
    return this.http.post<void>(URL_API + '/add', customer);
  }

  editObject(customer: Customer): Observable<void> {
    console.log(customer);
    return this.http.patch<void>(URL_API + '/edit/' + customer.id, customer);
  }

  deleteObject(id: number): Observable<void> {
    return this.http.delete<void>(URL_API + '/del/' + id);
  }
}
