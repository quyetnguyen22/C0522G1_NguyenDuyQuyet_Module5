import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Rank} from '../../model/customer/rank';

const URL_API = 'http://localhost:8080/customer';

@Injectable({
  providedIn: 'root'
})
export class RankService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Rank[]> {
    return this.http.get<Rank[]>(URL_API + '/rank');
  }
}
