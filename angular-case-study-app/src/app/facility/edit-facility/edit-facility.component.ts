import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-facility',
  templateUrl: './edit-facility.component.html',
  styleUrls: ['./edit-facility.component.css']
})
export class EditFacilityComponent implements OnInit {

  editingForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.editingForm = this.fb.group({
      serviceType: [],
      name: [],
      area: [],
      price: [],
      capacity: [],
      standard: [],
      utilities: [],
      pool: [],
      floor: [],
      free: [],
      rentingType: []
    });
  }

}
