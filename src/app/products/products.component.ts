import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  searchValue = ''

  constructor( private productService: ProductService) { 
  }

  ngOnInit(): void {
    
  }

  onSearch() {
    this.productService.searchQuery.next(this.searchValue);
    console.log(this.searchValue);
  }
}
