import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {IProduct} from '../../model/iproduct';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: IProduct[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.productService.getAll().subscribe(value => {
      this.products = value;
    });
  }
}
