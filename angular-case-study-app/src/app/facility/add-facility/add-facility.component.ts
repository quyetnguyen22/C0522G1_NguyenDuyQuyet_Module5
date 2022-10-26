import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-facility',
  templateUrl: './add-facility.component.html',
  styleUrls: ['./add-facility.component.css']
})
export class AddFacilityComponent implements OnInit {

  formAdd: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.formAdd = this.fb.group({
      type: [],
      name: [],
      area: [],
      price: [],
      capacity: [],
      standard: [],
      utilities: [],
      pool: [],
      floor: [],
      free: [],
      renting: []
    });

  }

}
