import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  productObj: Product

  constructor(private route: ActivatedRoute,private router:Router) {
    this.productObj = new Product()
    this.route.params.subscribe((res) => {
      this.productObj.id = res['id']
    })
  }

  ngOnInit(): void {
    const oldRecords = localStorage.getItem("product-list")
    if (oldRecords !== null) {
      const productList = JSON.parse(oldRecords)
      const currentProduct = productList.find((val: any) => val.id == this.productObj.id)
      if (currentProduct !== undefined) {
        this.productObj.title = currentProduct.title
        this.productObj.price = currentProduct.price
        this.productObj.quantity = currentProduct.quantity
      }
    }
  }
  updateProduct() {
    debugger;
    const oldRecord = localStorage.getItem('product-list')
    if (oldRecord !== null) {
      const productList = JSON.parse(oldRecord)
      productList.splice(productList.findIndex((a: any) => a.id == this.productObj.id), 1);
      productList.unshift(this.productObj)
      localStorage.setItem('product-list', JSON.stringify(productList))
    }
    this.router.navigate([''])
  }
}
