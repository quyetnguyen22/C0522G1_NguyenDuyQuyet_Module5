import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IProduct} from '../../model/iproduct';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  formDelete: FormGroup;
  product: IProduct;
  category: Category[] = [];

  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.delId);
    this.productService.findById(id).subscribe(value => {
      this.formDelete.patchValue(value);
      this.formDelete.controls.category.patchValue(value.category.name);
    });
    console.log(this.product);
    this.formDelete = this.fb.group({
      id: [],
      name: [],
      price: [],
      description: [],
      category: []
    });
  }

  saveDeleting() {
    const product = this.formDelete.value;
    console.log(product);
    this.productService.deleteProduct(product.id).subscribe(() => {
      this.router.navigateByUrl('product/list');
    });
  }
}
