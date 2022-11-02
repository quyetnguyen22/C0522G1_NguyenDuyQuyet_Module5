import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SavingBook} from '../../model/saving-book';
import {Customer} from '../../model/customer';
import {SavingBookService} from '../../service/saving-book.service';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-saving-book-edit',
  templateUrl: './saving-book-edit.component.html',
  styleUrls: ['./saving-book-edit.component.css']
})
export class SavingBookEditComponent implements OnInit {

  formUpdate: FormGroup;
  periods = [1, 3, 6];
  customers: Customer[] = [];
  submitted = false;
  savingBegin: string;
  check = false;

  constructor(private fb: FormBuilder,
              private savingBookService: SavingBookService,
              private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.savingBookService.findById(id).subscribe(value => {
      this.savingBegin = value.savingDate;
      this.formUpdate.patchValue(value);
      console.log(value);
    });
    // console.log(this.savingBook);
    this.formUpdate = this.fb.group({
      id: [],
      customer: this.fb.group({
        id: ['', [Validators.required]],
        name: ['', [Validators.required]]
      }, {validators: this.checkCustomer}),
      openDate: ['', [Validators.required]],
      savingDate: ['', [Validators.required]],
      period: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.min(10000000)]],
      interest: ['', [Validators.required]],
      promotion: ['', [Validators.required]]
    });
    this.getAllCustomers();
  }

  saveEditing() {
    const savingBook = this.formUpdate.value;
    const customer = savingBook.customer;
    this.savingBookService.editProduct(savingBook).subscribe(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Updated successfully!',
          text: 'Saving Book: ' + savingBook.id,
          showConfirmButton: false,
          timer: 2500
        });
      },
      error => {
      },
      () => {
        this.router.navigateByUrl('savingBook/list');
      });

    this.customerService.editCustomer(customer).subscribe(value => {
      console.log();
    });
  }

  private getAllCustomers() {
    this.customerService.getAll().subscribe(value => {
      this.customers = value;
    });
  }

  // compareWithId(item1, item2) {
  //   return item1 && item2 && item1.id === item2.id;
  // }

  get formUpdateControl() {
    return this.formUpdate.controls;
  }

  checkCustomer(abstractControl: AbstractControl): any {
    const customerName = abstractControl.value.name;
    return customerName === '^([\\p{Lu}][\\p{Ll}]{1,8})(\\s([\\p{Lu}]|[\\p{Lu}][\\p{Ll}]{1,10})){0,5}$' ? null : {invalidName: true};
  }

  // checkDate(abstractOpenDate: AbstractControl) {
  //   const openYear = Number(abstractOpenDate.value.substr(0, 4));
  //   const openMonth = abstractOpenDate.value.substr(4, 2);
  //   const openDate = abstractOpenDate.value.substr(6, 2);
  //   const savingYear = Number(this.savingBegin.substr(0, 4));
  //   const savingMonth = Number(this.savingBegin.substr(4, 2));
  //   const savingDate = Number(this.savingBegin.substr(6, 2));
  //   if (savingYear - openYear > 0 && savingMonth - openMonth > 0 && openDate - savingDate > 0) {
  //     this.check = true;
  //   }
  //   // console.log(curDate);
  //   return this.check ? null : {invalidDate: true};
  // }
}
