import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CustomerService} from '../../service/customer/customer.service';
import {RankService} from '../../service/customer/rank.service';
import {Rank} from '../../model/customer/rank';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  formAdd: FormGroup;
  ranks: Rank[] = [];

  constructor(private fb: FormBuilder,
              private customerService: CustomerService,
              private rankService: RankService) {
  }

  ngOnInit(): void {
    this.formAdd = this.fb.group({
      name: [],
      birthday: [],
      gender: [],
      idNum: [],
      phone: [],
      email: [],
      address: [],
      rank: []
    });
    this.getAllRank();
  }

  getAllRank() {
    this.rankService.getAll().subscribe(value => {
      this.ranks = value;
    });
  }

  addNewCustomer() {
    const customer = this.formAdd.value;
    console.log(customer);
    this.customerService.addNew(customer).subscribe(() => {
      this.formAdd.reset();
    });
  }
}
