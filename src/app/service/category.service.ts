import {Injectable} from '@angular/core';
import {Product} from "../models/product.model";
import {Category} from "../models/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() {
  }
  getCategoryList(): Category[] {
    return JSON.parse(localStorage.getItem('category-list') || '[]');
  }

  generateProductId(): number {
    const oldRecords = this.getCategoryList();
    return ++oldRecords.length;
  }
  createCategory(currentCategory:Category): void {
    currentCategory.id = this.generateProductId();
    const oldRecords = this.getCategoryList();
    oldRecords.push(currentCategory);
    localStorage.setItem('category-list', JSON.stringify(oldRecords));
  }
  deleteCategory(id:any):void{
    const oldRecord = this.getCategoryList()
    oldRecord.splice(oldRecord.findIndex((a: any) => a.id == id), 1);
    localStorage.setItem('category-list', JSON.stringify(oldRecord))
  }
}
