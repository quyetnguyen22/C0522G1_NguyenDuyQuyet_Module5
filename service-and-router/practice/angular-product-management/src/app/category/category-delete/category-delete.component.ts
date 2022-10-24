import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {

  formDel: FormGroup;

  constructor(private fb: FormBuilder,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.idDelete);
    this.categoryService.findById(id).subscribe(category => {
      this.formDel = this.fb.group({
        id: [],
        name: []
      });
      this.formDel.patchValue(category);
    });
  }

  deleteCategory() {
    const category = this.formDel.value;
    this.categoryService.deleteCategory(category.id).subscribe(() => {
      this.router.navigateByUrl('/category/list');
    });
  }

}
