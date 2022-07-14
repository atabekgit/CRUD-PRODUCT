import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./components/main-layout/main-layout.component";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {CreateProductComponent} from "./components/create-product/create-product.component";
import {UpdateProductComponent} from "./components/update-product/update-product.component";

const routes: Routes = [
  {
    path: "", component: MainLayoutComponent, children: [
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      },
      {path: '', component: ProductListComponent},
      {path: 'create', component: CreateProductComponent},
      {path: 'update/:id', component: UpdateProductComponent},
      {
        path: 'category',
        loadChildren: () => import('./shared/category/category.module').then(m => m.CategoryModule)
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
