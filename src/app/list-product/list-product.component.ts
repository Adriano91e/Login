import { Component, OnInit } from '@angular/core';
import {LoginService} from "../provider/login.service";
import {Router} from "@angular/router";
import {flatMap} from "tslint/lib/utils";
import {ProductService} from "../provider/product.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  listProduct: Array<any> = new Array();
  private a;
  constructor(private productService:ProductService, private router:Router) {

  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.productService.getList().subscribe(data => {
      this.listProduct = data;
      this.a=this.listProduct.length;
      console.log(this.listProduct)
      console.log(this.a);
    }, err => {
      console.log(err)
    })
  }

}
