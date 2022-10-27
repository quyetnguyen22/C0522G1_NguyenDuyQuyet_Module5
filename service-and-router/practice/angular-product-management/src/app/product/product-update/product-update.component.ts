import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IProduct} from '../../model/iproduct';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  formUpdate: FormGroup;
  product: IProduct;
  categories: Category[] = [];

  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
  }


  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.editId);
    this.productService.findById(id).subscribe(value => {
      this.formUpdate.patchValue(value);
    });
    console.log(this.product);
    this.formUpdate = this.fb.group({
      id: [],
      name: [],
      price: [],
      description: [],
      category: []
    });
    this.getAllCategories();
  }

  saveEditing() {
    const product = this.formUpdate.value;
    this.productService.editProduct(product).subscribe(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Edit successfully!',
          text: 'Customer: ' + product.name,
          showConfirmButton: false,
          timer: 2500
        });
    },
      error => {},
      () => {this.router.navigateByUrl('product/list'); });

  }

  private getAllCategories() {
    this.categoryService.getAll().subscribe(value => {
      this.categories = value;
    });
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
}
