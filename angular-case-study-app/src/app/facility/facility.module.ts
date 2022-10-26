import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import {AddFacilityComponent} from './add-facility/add-facility.component';
import {EditFacilityComponent} from './edit-facility/edit-facility.component';
import {ListFacilityComponent} from './list-facility/list-facility.component';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AddFacilityComponent,
    EditFacilityComponent,
    ListFacilityComponent
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class FacilityModule { }
