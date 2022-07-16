import {Component, OnInit} from '@angular/core';
import {Category} from "../../../models/category.model";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categoryList: Category[] = []

  constructor(private categoryService: CategoryService) {

  }

  ngOnInit(): void {
    this.categoryList = this.getCategoryList()
  }

  getCategoryList(): Category[] {
    return JSON.parse(localStorage.getItem('category-list') || '[]');
  }


  deleteCategory(id: any):void {
    this.categoryService.deleteCategory(id)
    this.categoryList = this.getCategoryList();
  }
}
