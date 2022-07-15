import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryListComponent} from "../category-list/category-list.component";
import {CreateCategoryComponent} from "../create-category/create-category.component";
import {MainLayoutCategoryComponent} from "../main-layout-category/main-layout-category.component";

const routes: Routes = [

  {
    path: '',
    component: MainLayoutCategoryComponent,
    children: [
      {
        path: '',
        component: CategoryListComponent,
        pathMatch: 'full'
      },
      {
        path: 'create_category',
        component: CreateCategoryComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
}
