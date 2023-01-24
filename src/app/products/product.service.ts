import { HttpClient } from "@angular/common/http";
import { Product } from "./product.model";
import { map, pipe, Subject } from 'rxjs'
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {

  products: Product[] = []
  searchQuery = new Subject<string>();
  productsCount: number = 0;

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

  searchProduct(searchText: string) {
    return this.http.get("https://dummyjson.com/products/search?q="+ searchText)
      .pipe(
        map((respData: any) => {
          const resp = respData.products
          return this.products = resp;
        })
      )
  }

  addProduct(product: Product){
    return this.http.post<Product>("https://dummyjson.com/products/add", product)
      .pipe(
        map((repsData: Product) => {
          const resp = repsData;
          return resp;
        })
      )
  }

  updateProduct(product: Product, id: number) {
    return this.http.put<Product>("https://dummyjson.com/products/"+id, product)
      .pipe(
        map((repsData: Product) => {
          const resp = repsData
          return resp;
        })
      )
  }
}