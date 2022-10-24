import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListFacilityComponent} from './list-facility/list-facility.component';
import {AddFacilityComponent} from './add-facility/add-facility.component';
import {EditFacilityComponent} from './edit-facility/edit-facility.component';


const routes: Routes = [
  {
    path: 'facility/list',
    component: ListFacilityComponent
  },
  {
    path: 'facility/add',
    component: AddFacilityComponent
  },
  {
    path: 'facility/:id',
    component: EditFacilityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }
