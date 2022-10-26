import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomerRoutingModule} from './customer-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AddCustomerComponent} from './add-customer/add-customer.component';
import {ListCustomerComponent} from './list-customer/list-customer.component';
import {EditCustomerComponent} from './edit-customer/edit-customer.component';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AddCustomerComponent,
    ListCustomerComponent,
    EditCustomerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class CustomerModule {
}
