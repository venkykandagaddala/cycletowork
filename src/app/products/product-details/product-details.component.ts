import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: number = 0;
  product: any;
  isLoading: boolean = false;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.productId = +this.route.snapshot.params["id"];
    this.isLoading = true;
    this.productService.getProduct(this.productId).subscribe((resp: any) => {
      this.product = resp;
      this.isLoading = false;
    })
  }

}
