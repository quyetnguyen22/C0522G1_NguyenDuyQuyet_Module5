import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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
  },
  {
    path: 'customer/del/:id',
    component: EditCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
