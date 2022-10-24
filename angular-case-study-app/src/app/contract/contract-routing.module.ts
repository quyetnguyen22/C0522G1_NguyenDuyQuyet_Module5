import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddContractComponent} from './add-contract/add-contract.component';
import {ListContractComponent} from './list-contract/list-contract.component';


const routes: Routes = [
  {
    path: 'contract/list',
    component: ListContractComponent
  },
  {
    path: 'contract/add',
    component: AddContractComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
