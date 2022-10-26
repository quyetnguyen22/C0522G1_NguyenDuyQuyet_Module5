import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer/customer.service';
import {Customer} from '../../model/customer/customer';
import {RankService} from '../../service/customer/rank.service';
import {Rank} from '../../model/customer/rank';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getAllCustomer();
  }

  getAllCustomer() {
    this.customerService.getAll().subscribe(value => {
      this.customers = value;
      console.log(value);
    });
  }

}
