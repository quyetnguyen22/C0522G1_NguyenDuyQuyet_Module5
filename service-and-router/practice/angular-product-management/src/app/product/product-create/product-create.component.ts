import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  formAdd: FormGroup;
  categories: Category[] = [];
  submitted = false;

  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.formAdd = this.fb.group({
      id: [],
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', Validators.required],
      category: ['', [Validators.required]]
    });
    this.getAllCategories();
  }

  addProduct() {
    this.submitted = true;
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

  get formAddControl() {
    return this.formAdd.controls;
  }
}
