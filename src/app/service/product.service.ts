import {Injectable} from '@angular/core';
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getProductList(): Product[] {
    return JSON.parse(localStorage.getItem('product-list') || '[]');
  }

  generateProductId(): number {
    const oldRecords = this.getProductList();
    return ++oldRecords.length;
  }
  createProduct(currentProduct: Product): void {
    currentProduct.id = this.generateProductId();
    const oldRecords = this.getProductList();
    oldRecords.push(currentProduct);
    this.setLocalStorageItem(oldRecords)
  }
  deleteProduct(id:any) {
    const oldRecord = this.getProductList()
    oldRecord.splice(oldRecord.findIndex((a: any) => a.id == id), 1);
    localStorage.setItem('product-list', JSON.stringify(oldRecord))
  }
  updateProduct(product:Product){
    const oldRecords = this.getProductList();
    oldRecords.splice(oldRecords.findIndex((a: any) => a.id == product.id), 1);
    oldRecords.unshift(product)
    this.setLocalStorageItem(oldRecords)
  }
  setLocalStorageItem(oldRecord:Product[]){
    localStorage.setItem('product-list', JSON.stringify(oldRecord))
  }
}
