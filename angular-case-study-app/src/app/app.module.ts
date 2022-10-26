import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeModule} from './home/home.module';
import {AppRoutingModule} from './app-routing.module';
import {ContractModule} from './contract/contract.module';
import {CustomerModule} from './customer/customer.module';
import {FacilityModule} from './facility/facility.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
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
