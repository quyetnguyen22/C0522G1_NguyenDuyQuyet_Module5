import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer/customer.service';
import {RankService} from '../../service/customer/rank.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Customer} from '../../model/customer/customer';
import {Rank} from '../../model/customer/rank';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  formEdit: FormGroup;
  customer: Customer;
  ranks: Rank[] = [];

  constructor(private customerService: CustomerService,
              private rankService: RankService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.idUpdate;
    this.customerService.findById(id).subscribe(value => {
      this.customer = value;
      this.formEdit.patchValue(this.customer);
    });
    this.formEdit = this.fb.group({
      name: [],
      birthday: [],
      gender: [],
      idNum: [],
      phone: [],
      email: [],
      address: [],
      rank: []
    });
    this.getRank();
  }


  getRank() {
    this.rankService.getAll().subscribe(value => {
      this.ranks = value;
    });
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
}
