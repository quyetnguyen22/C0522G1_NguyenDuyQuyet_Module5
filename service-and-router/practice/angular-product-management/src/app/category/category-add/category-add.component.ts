import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  addingForm: FormGroup;

  constructor(private categoryService: CategoryService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.addingForm = this.fb.group({
      name: []
    });
  }

  saveAdding() {
    const category = this.addingForm.value;
    this.categoryService.saveCategory(category).subscribe(() => {
      this.addingForm.reset();
    });
  }

}
