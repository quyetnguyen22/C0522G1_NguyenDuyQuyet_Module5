import {Injectable} from '@angular/core';
import {IProduct} from '../model/iproduct';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

const API_URL = `${environment.productUrl}`;

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(API_URL);
  }

  saveProduct(product: IProduct): Observable<void> {
    return this.http.post<void>(API_URL, product);
  }

  editProduct(product: IProduct): Observable<void> {
    return this.http.patch<void>(API_URL + '/' + product.id, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(API_URL + '/' + id);
  }

  findById(productId: number): Observable<IProduct> {
    return this.http.get(API_URL + '/' + productId);
  }


}
