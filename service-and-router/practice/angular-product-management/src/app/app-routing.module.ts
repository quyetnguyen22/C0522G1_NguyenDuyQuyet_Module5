import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductModule} from './product/product.module';


const routes: Routes = [
  {
    path: 'product',
    loadChildren: () => ProductModule
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  // },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then(module => module.CategoryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
