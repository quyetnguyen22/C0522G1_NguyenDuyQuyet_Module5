import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SavingBookListComponent} from './saving-book/saving-book-list/saving-book-list.component';
import {SavingBookEditComponent} from './saving-book/saving-book-edit/saving-book-edit.component';


const routes: Routes = [
  {
    path: 'savingBook/list',
    component: SavingBookListComponent
  },
  {
    path: 'savingBook/:id',
    component: SavingBookEditComponent
  },
  {
    path: 'savingBook/:del',
    component: SavingBookEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
