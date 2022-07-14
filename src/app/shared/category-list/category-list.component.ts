import { Component, OnInit } from '@angular/core';
import {ServicesService} from "../services/services.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {


  constructor(private services:ServicesService) { }

  ngOnInit(): void {
  }


  addCategory() {

  }
}
