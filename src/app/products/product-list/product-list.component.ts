import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = []
  isloading = false;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.isloading = true;
    this.productService.getProducts().subscribe((resp) => {
      this.products = resp;
      this.isloading = false;
    })
  }

}
