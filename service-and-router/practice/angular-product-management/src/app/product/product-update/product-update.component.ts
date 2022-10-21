import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IProduct} from '../../model/iproduct';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  formUpdate: FormGroup;
  product: IProduct;

  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
  }


  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.editId);
    this.product = this.productService.findById(id);
    console.log(this.product);
    this.formUpdate = this.fb.group({
      id: [],
      name: [],
      price: [],
      description: []
    });
    this.formUpdate.patchValue(this.product);
  }

  saveEditing() {
    const product = this.formUpdate.value;
    this.productService.editProduct(product.id, product);
    this.router.navigateByUrl('/product/list');
  }


}
