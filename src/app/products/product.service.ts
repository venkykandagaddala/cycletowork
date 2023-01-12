import { HttpClient } from "@angular/common/http";
import { Product } from "./product.model";
import { map, pipe } from 'rxjs'
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {

  products: Product[] = []

  constructor(private http: HttpClient) {

  }

  getProducts(){
    return this.http.get("https://dummyjson.com/products")
      .pipe(
        map((respData :any) => {
          const resp = respData.products;
          return this.products = resp
        })
      )
  }

  getProduct(productId: number) {
    return this.http.get("https://dummyjson.com/products/"+ productId)
      .pipe(
        map((respData :any) => {
          const resp = respData
          return resp;
        })
      )

  }
}