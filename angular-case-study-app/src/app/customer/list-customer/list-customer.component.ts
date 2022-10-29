import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer/customer.service';
import {Customer} from '../../model/customer/customer';
import Swal from 'sweetalert2';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {


  delName: string;
  delId: number;
  page = 1;
  pageSize = 10;
  total$: Observable<number>;
  customers$: Observable<Customer[]>;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getAllCustomer();
  }

  getAllCustomer() {
    this.customerService.getAll(this.page, this.pageSize).subscribe(value => {
      this.customers$ = new BehaviorSubject<Customer[]>(value.content);
      this.total$ = new BehaviorSubject<number>(value.totalElements);
      // console.log(value.number);
    },
      error => {});
  }

  deleteConfirm(customer: Customer) {
    console.log(customer);
    this.delName = customer.name;
    this.delId = customer.id;
    }

  delete() {
    this.customerService.deleteObject(this.delId).subscribe(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Delete successfully!',
        text: 'Customer: ' + this.delName,
        showConfirmButton: false,
        timer: 2500
      });
      this.getAllCustomer();
      // confirm('Delete successfully!\n' + this.delName);
    });

  }
}
