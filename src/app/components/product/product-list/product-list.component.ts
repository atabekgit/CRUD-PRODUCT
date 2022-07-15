import {Component, OnInit} from '@angular/core';
import {Product} from "../../../models/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList!: Product[]

  constructor() {
    this.productList = []
  }

  ngOnInit(): void {
    const records = localStorage.getItem('product-list')
    if (records !== null) {
      this.productList = JSON.parse(records);
    }
  }

  delete(id: any) {
    const oldRecord = localStorage.getItem('product-list')
    if (oldRecord !== null) {
      const productList = JSON.parse(oldRecord)
      productList.splice(productList.findIndex((a: any) => a.id == id), 1);
      localStorage.setItem('product-list', JSON.stringify(productList))
    }
    const records = localStorage.getItem('product-list')
    if (records !== null) {
      this.productList = JSON.parse(records);
    }
  }
}
