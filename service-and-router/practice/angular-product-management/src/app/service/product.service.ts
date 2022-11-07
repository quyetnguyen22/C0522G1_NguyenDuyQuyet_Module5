import {Injectable} from '@angular/core';
import {IProduct} from '../model/iproduct';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ProductResult} from '../model/product-result';
import {AngularFirestore} from '@angular/fire/firestore';

const API_URL = `${environment.productUrl}`;

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient, private fireservice: AngularFirestore) {
  }

  getAll(page: number, limit: number): Observable<ProductResult<IProduct>> {
    return this.http.get<ProductResult<IProduct>>(API_URL + '?_page=' + page + '&_limit=' + limit);
  }

  // saveProduct(product: IProduct): Observable<void> {
  //   return this.http.post<void>(API_URL, product);
  // }

  saveProduct(product: IProduct) {
    return this.fireservice.collection('product').add(product);
  }

  editProduct(product: IProduct): Observable<void> {
    return this.http.patch<void>(API_URL + '/' + product.id, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(API_URL + '/' + id);
  }

  findById(productId: number): Observable<IProduct> {
    return this.http.get<IProduct>(API_URL + '/' + productId);
  }


}
