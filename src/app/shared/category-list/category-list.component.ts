import {Component, OnInit} from '@angular/core';
import {Category} from "../../models/category.model";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categoryList!: Category[]

  constructor() {
    this.categoryList = []
  }

  ngOnInit(): void {
    const records = localStorage.getItem('category-list')
    if (records !== null) {
      this.categoryList = JSON.parse(records);
    }
  }


  delete(id:any) {
    const oldRecord = localStorage.getItem('category-list')
    if (oldRecord !== null) {
      const productList = JSON.parse(oldRecord)
      productList.splice(productList.findIndex((a: any) => a.id == id), 1);
      localStorage.setItem('category-list', JSON.stringify(productList))
    }
    const records = localStorage.getItem('category-list')
    if (records !== null) {
      this.categoryList = JSON.parse(records);
    }
  }
}
