import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../../models/product.model";
import {Category} from "../../../models/category.model";
import {ProductService} from "../../../service/product.service";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  productObj: Product = new Product();
  categoryList: Category[] = [];

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((res) => {
      this.productObj.id = res['id']
    })
  }

  ngOnInit(): void {
    this.productListUpdate()
    this.viewProduct()
  }

  viewProduct() {
    const currentProduct = this.productListUpdate().find((val: any) => val.id == this.productObj.id)
    this.productObj.title = currentProduct.title
    this.productObj.price = currentProduct.price
    this.productObj.quantity = currentProduct.quantity
    this.productObj.category = currentProduct.category
  }


  productListUpdate() {
    return JSON.parse(localStorage.getItem('product-list') || "[]")
  }

  updateProduct() {
    this.productService.updateProduct(this.productObj)
    this.router.navigate([''])
  }
}
