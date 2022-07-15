import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./components/main-layout/main-layout.component";
import {ProductListComponent} from "./components/product/product-list/product-list.component";
import {CreateProductComponent} from "./components/product/create-product/create-product.component";
import {UpdateProductComponent} from "./components/product/update-product/update-product.component";

const routes: Routes = [
  {
    path: "", component: MainLayoutComponent, children: [
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      },
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: 'create',
        component: CreateProductComponent
      },
      {
        path: 'update/:id',
        component: UpdateProductComponent
      },
      {
        path: 'category',
        loadChildren: () => import('./module/category/category.module').then(m => m.CategoryModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
