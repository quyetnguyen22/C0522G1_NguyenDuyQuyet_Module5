import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListFacilityComponent} from './list-facility/list-facility.component';
import {AddFacilityComponent} from './add-facility/add-facility.component';
import {EditFacilityComponent} from './edit-facility/edit-facility.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'list-service', component: ListFacilityComponent},
  {path: 'add-service', component: AddFacilityComponent},
  {path: 'edit-service/:id', component: EditFacilityComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class FacilityRoutingModule { }
