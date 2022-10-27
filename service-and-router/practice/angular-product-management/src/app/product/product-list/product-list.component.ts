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
  collection = [];

  constructor(private productService: ProductService) {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
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
