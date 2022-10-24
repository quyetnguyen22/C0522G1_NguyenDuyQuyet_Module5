import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {FacilityComponent} from './facility/facility.component';
import {EditFacilityComponent} from './facility/edit-facility/edit-facility.component';
import {ListFacilityComponent} from './facility/list-facility/list-facility.component';
import {AddFacilityComponent} from './facility/add-facility/add-facility.component';
import {CustomerComponent} from './customer/customer.component';
import {AddCustomerComponent} from './customer/add-customer/add-customer.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {EditCustomerComponent} from './customer/edit-customer/edit-customer.component';
import {ContractComponent} from './contract/contract.component';
import {AddContractComponent} from './contract/add-contract/add-contract.component';
import {ListContractComponent} from './contract/list-contract/list-contract.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HomeModule} from './home/home.module';
import {AppRoutingModule} from './app-routing.module';
import {ContractModule} from './contract/contract.module';
import {CustomerModule} from './customer/customer.module';
import {FacilityModule} from './facility/facility.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FacilityComponent,
    AddFacilityComponent,
    EditFacilityComponent,
    ListFacilityComponent,
    CustomerComponent,
    AddCustomerComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    ContractComponent,
    AddContractComponent,
    ListContractComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ContractModule,
    CustomerModule,
    FacilityModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
