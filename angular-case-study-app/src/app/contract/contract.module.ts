import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContractRoutingModule} from './contract-routing.module';
import {AddContractComponent} from './add-contract/add-contract.component';
import {ListContractComponent} from './list-contract/list-contract.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    AddContractComponent,
    ListContractComponent],
  imports: [
    CommonModule,
    ContractRoutingModule,
    SharedModule
  ]
})
export class ContractModule {
}
