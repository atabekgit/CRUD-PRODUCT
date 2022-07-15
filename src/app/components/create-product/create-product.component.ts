import {Component} from '@angular/core';
import {Product} from "../../models/product.model";


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {

  click: boolean = true
  productObj!: Product

  constructor() {
    this.productObj = new Product();
  }

  getProductID() {
    const oldRecords = localStorage.getItem('product-list')
    if (oldRecords !== null) {
      const productList = JSON.parse(oldRecords)
      return productList.length + 1
    } else {
      return 1;
    }
  }

  saveProduct() {
    this.click = !this.click;
    this.productObj.id = this.getProductID()
    const oldRecords = localStorage.getItem('product-list')
    if (oldRecords !== null) {
      const productList = JSON.parse(oldRecords)
      productList.push(this.productObj)
      localStorage.setItem('product-list', JSON.stringify(productList))
    } else {
      const productArray = []
      productArray.push(this.productObj)
      localStorage.setItem('product-list', JSON.stringify(productArray))
    }
  }

  onKey($event: KeyboardEvent) {
    this.click = ($event.target as HTMLInputElement).value === '' ? true : false;
  }
}
