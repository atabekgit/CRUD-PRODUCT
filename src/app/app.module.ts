import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainLayoutComponent} from './components/main-layout/main-layout.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {CreateProductComponent} from './components/create-product/create-product.component';
import {FormsModule} from "@angular/forms";
import {UpdateProductComponent} from './components/update-product/update-product.component';
import {CategoryModule} from "./shared/category/category.module";
import { CreateCategoryComponent } from './shared/create-category/create-category.component';
import { MainLayoutCategoryComponent } from './shared/main-layout-category/main-layout-category.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ProductListComponent,
    CreateProductComponent,
    UpdateProductComponent,
    CreateCategoryComponent,
    MainLayoutCategoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CategoryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
