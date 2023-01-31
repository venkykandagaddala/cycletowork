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
  sortString: string;

  constructor(private productService: ProductService) {
    
    this.productService.sortBy.subscribe((str: string) => {
      this.sortString = str;
      console.log("Constructor  => "+this.sortString);
      if (this.sortString === 'desc') {        
        this.products = this.products.sort((a,b) => a.title > b.title ? -1 : 1)
      } else {
        this.products = this.products.sort((a,b) => a.title > b.title ? 1 : -1)
      }
    })
    
    this.productService.searchQuery.subscribe((s: string) =>{
      this.searchProducts(s);
    })

    
  }

  ngOnInit() {
    this.isloading = true;
    this.productService.getProducts().subscribe((resp) => {
      this.products = resp;
      if (this.sortString) {
        this.products = this.products.sort((a,b) => a.title > b.title ? 1 : -1)
      }      
      this.isloading = false;
    }, error => {
      console.log(error);
      debugger;
      alert(error.error.message)
      this.isloading = false;
    })
  }

  searchProducts(searchContent: string) {
    this.isloading = true;
    this.productService.searchProduct(searchContent).subscribe((resp: Product[]) => {
      console.log("Search "+this.sortString);
      if(this.sortString === 'asc') {
        this.products = resp.sort((a,b) => a.title > b.title ? 1 : -1)
      } else {
        this.products = resp.sort((a,b) => a.title > b.title ? -1 : 1)
      }      
      this.isloading = false;
    })
  }

}
