import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductModule} from './product/product.module';
import {HttpClientModule} from '@angular/common/http';
import {CategoryListComponent} from './category/category-list/category-list.component';
import {CategoryAddComponent} from './category/category-add/category-add.component';
import {CategoryUpdateComponent} from './category/category-update/category-update.component';
import {CategoryDeleteComponent} from './category/category-delete/category-delete.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CategoryModule} from './category/category.module';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryUpdateComponent,
    CategoryDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductModule,
    CategoryModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
