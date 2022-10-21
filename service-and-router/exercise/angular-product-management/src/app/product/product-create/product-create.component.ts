import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  formAdd: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.formAdd = this.fb.group({
      id: [],
      name: [],
      price: [],
      description: []
    });
  }

  addProduct() {
    const product = this.formAdd.value;
    this.productService.saveProduct(product);
    this.formAdd.reset();
  }

}
