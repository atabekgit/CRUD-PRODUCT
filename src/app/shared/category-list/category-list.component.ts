import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "../../services/local-storage.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Category, Product} from "../../model/model";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categoryList!: Category[]
  categoryObj!:Category
  constructor() {
    this.categoryObj = new Category();
    this.categoryList = []
  }

  ngOnInit(): void {
    const records = localStorage.getItem('category-list')
    if (records !== null) {
      this.categoryList = JSON.parse(records);
    }
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
  saveCategory(){
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
