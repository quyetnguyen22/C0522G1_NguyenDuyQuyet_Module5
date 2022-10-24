import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  formAdd: FormGroup;
  categories: Category[] = [];

  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.formAdd = this.fb.group({
      id: [],
      name: [],
      price: [],
      description: [],
      category: []
    });
    this.getAllCategories();
  }

  addProduct() {
    const product = this.formAdd.value;
    this.productService.saveProduct(product).subscribe(() => {
      this.formAdd.reset();
    });
  }

  getAllCategories() {
    this.categoryService.getAll().subscribe(value => {
      this.categories = value;
    });
  }
}
