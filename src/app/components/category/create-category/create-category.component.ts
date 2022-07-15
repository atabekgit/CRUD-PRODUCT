import {Component, OnInit} from '@angular/core';
import {Category} from "../../../models/category.model";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
  categoryObj!: Category

  constructor() {
    this.categoryObj = new Category();
  }

  ngOnInit(): void {
  }

  getCategoryID() {
    const oldRecords = localStorage.getItem('category-list')
    if (oldRecords !== null) {
      const productList = JSON.parse(oldRecords)
      return productList.length + 1
    } else {
      return 1;
    }
  }

  saveCategory() {
    this.categoryObj.id = this.getCategoryID()
    const oldRecords = localStorage.getItem('category-list')
    if (oldRecords !== null) {
      const productList = JSON.parse(oldRecords)
      productList.push(this.categoryObj)
      localStorage.setItem('category-list', JSON.stringify(productList))
    } else {
      const productArray = []
      productArray.push(this.categoryObj)
      localStorage.setItem('category-list', JSON.stringify(productArray))
    }
  }

}
