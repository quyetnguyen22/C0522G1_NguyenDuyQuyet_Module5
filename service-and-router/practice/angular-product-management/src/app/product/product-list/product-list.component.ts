import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {IProduct} from '../../model/iproduct';
import {BehaviorSubject, Observable} from 'rxjs';
import {ProductResult} from '../../model/product-result';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  page = 1;
  pageSize = 2;
  products$: Observable<IProduct[]>;
  total$: Observable<number>;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.productService.getAll(this.page, this.pageSize).subscribe(value => {
      this.products$ = new BehaviorSubject<IProduct[]>(value.data);
      this.total$ = new BehaviorSubject<number>(value.pagination._totalRows);
    });
  }

}
