import {Injectable} from "@angular/core";
import {Product} from "../model/model";


@Injectable({providedIn: 'root'})
export class LocalStorageService {
  productObj: Product
  constructor() {
    this.productObj = new Product()
  }



}
