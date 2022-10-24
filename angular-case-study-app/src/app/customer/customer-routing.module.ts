import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './customer.component';
import {ListCustomerComponent} from './list-customer/list-customer.component';
import {AddCustomerComponent} from './add-customer/add-customer.component';
import {EditCustomerComponent} from './edit-customer/edit-customer.component';


const routes: Routes = [
  {
    path: 'customer/list',
    component: ListCustomerComponent
  },
  {
    path: 'customer/add',
    component: AddCustomerComponent
  },
  {
    path: 'customer/:idUpdate',
    component: EditCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
