import {Component} from '@angular/core';
import {Category} from "../../../models/category.model";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent {
  category: Category = new Category();

  constructor(private categoryService: CategoryService) {
  }

  createCategory() {
    this.categoryService.createCategory(this.category);
  }

}
