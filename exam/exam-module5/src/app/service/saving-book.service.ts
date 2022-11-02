import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SavingBook} from '../model/saving-book';
import {DataReturn} from '../model/dataReturn';
import {environment} from '../../environments/environment';

const API_URL = `${environment.savingBookUrl}`;

@Injectable({
  providedIn: 'root'
})
export class SavingBookService {

  constructor(private http: HttpClient) {
  }

  getAll(page: number, limit: number): Observable<DataReturn<SavingBook>> {
    return this.http.get<DataReturn<SavingBook>>(API_URL + '?_page=' + page + '&_limit=' + limit);
  }

  editProduct(savingBook: SavingBook): Observable<void> {
    return this.http.patch<void>(API_URL + '/' + savingBook.id, savingBook);
  }

  findById(savingBookId: number): Observable<SavingBook> {
    return this.http.get<SavingBook>(API_URL + '/' + savingBookId);
  }

  deleteObject(id: number): Observable<void> {
    return this.http.delete<void>(API_URL + '/' + id);
  }
}
