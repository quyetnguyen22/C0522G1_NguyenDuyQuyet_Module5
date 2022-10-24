import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {

  updatingForm: FormGroup;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) {

  }

  ngOnInit(): void {
    const  id = Number(this.activatedRoute.snapshot.params.idUpdate);
    this.categoryService.findById(id).subscribe(category => {
      this.updatingForm = this.fb.group({
        id: [],
        name: []
      });
      this.updatingForm.patchValue(category);
    });
  }

  saveUpdating() {
    const category = this.updatingForm.value;
    this.categoryService.updateCategory(category.id, category).subscribe(() => {
      this.router.navigateByUrl('/category/list');
    });
  }
}
