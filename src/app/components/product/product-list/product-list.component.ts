import {Component, OnInit} from '@angular/core';
import {Product} from "../../../models/product.model";
import {ProductService} from "../../../service/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []
 constructor(private productService:ProductService) {
 }
  ngOnInit(): void {
    this.productList = this.getProductList()
  }

  getProductList(): Product[] {
    return JSON.parse(localStorage.getItem('product-list') || '[]');
  }

   deleteProduct(id:any){
    this.productService.deleteProduct(id)
     this.productList = this.getProductList();

   }
}
