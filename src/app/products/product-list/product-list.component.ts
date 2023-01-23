import { Component, Input, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
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
  searchStr: string = '';

  constructor(private productService: ProductService) { 
    this.productService.searchQuery.subscribe((s: string) =>{
      this.searchProducts(s);
    })
  }

  ngOnInit() {
    this.isloading = true;
    this.productService.getProducts().subscribe((resp) => {
      this.products = resp;
      this.isloading = false;
    })
  }

  searchProducts(searchContent: string) {
    this.isloading = true;
    this.productService.searchProduct(searchContent).subscribe((resp) => {
      this.products = resp;
      this.isloading = false;
    })
  }

}
