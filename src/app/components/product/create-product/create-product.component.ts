import {Component, OnInit} from '@angular/core';
import {Product} from "../../../models/product.model";
import {Category} from "../../../models/category.model";
import {ProductService} from "../../../service/product.service";


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  click: boolean = true
  product: Product = new Product();
  categoryList: Category[] = []

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.categoryList = JSON.parse(localStorage.getItem('category-list') || '[]')
  }

  saveProduct() {
    this.click = !this.click;
    this.productService.createProduct(this.product);
  }

  onKey($event: KeyboardEvent) {
    this.click = ($event.target as HTMLInputElement).value === '';
  }
}
