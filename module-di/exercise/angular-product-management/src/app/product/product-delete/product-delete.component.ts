import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IProduct} from '../../model/iproduct';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  formDelete: FormGroup;
  product: IProduct;

  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
  }


  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.delId);
    this.product = this.productService.findById(id);
    console.log(this.product);
    this.formDelete = this.fb.group({
      id: [],
      name: [],
      price: [],
      description: []
    });
    this.formDelete.patchValue(this.product);
  }

  saveDeleting() {
    const product = this.formDelete.value;
    console.log(product);
    this.productService.deleteProduct(product.id);
    this.router.navigateByUrl('/product/list');
  }
}
