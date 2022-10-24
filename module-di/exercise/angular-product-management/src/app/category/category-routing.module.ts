import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryAddComponent} from './category-add/category-add.component';
import {CategoryUpdateComponent} from './category-update/category-update.component';
import {CategoryDeleteComponent} from './category-delete/category-delete.component';


const routes: Routes = [
  {
    path: 'category/list',
    component: CategoryListComponent
  },
  {
    path: 'category/add',
    component: CategoryAddComponent
  },
  {
    path: 'category/:id-update',
    component: CategoryUpdateComponent
  },
  {
    path: 'categoryDel/:id-delete',
    component: CategoryDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
