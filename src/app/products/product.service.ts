import { HttpClient } from "@angular/common/http";
import { Product } from "./product.model";
import { map, pipe, Subject } from 'rxjs'
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class ProductService {

  products: Product[] = []
  searchQuery = new Subject<string>();
  productsCount: number = 0;
  sortBy = new Subject<string>();

  constructor(private http: HttpClient) {

  }

  getProducts(){
    return this.http.get<Product[]>(environment.apiUrl+"/products")
      .pipe(
        map((respData :any) => {
          const resp = respData.products;
          return this.products = resp
        })
      )
  }

  getProduct(productId: number) {
    return this.http.get<Product>(environment.apiUrl+"/products/"+ productId)
      .pipe(
        map((respData :any) => {
          const resp = respData
          return resp;
        })
      )
  }

  searchProduct(searchText: string) {
    return this.http.get<Product[]>(environment.apiUrl+"/products/search?q="+ searchText)
      .pipe(
        map((respData: any) => {
          const resp = respData.products
          return this.products = resp;
        })
      )
  }

  addProduct(product: Product){
    return this.http.post<Product>(environment.apiUrl+"/products/add", product)
      .pipe(
        map((repsData: Product) => {
          const resp = repsData;
          return resp;
        })
      )
  }

  updateProduct(product: Product, id: number) {
    return this.http.put<Product>(environment.apiUrl+"/products/"+id, product)
      .pipe(
        map((repsData: Product) => {
          const resp = repsData
          return resp;
        })
      )
  }
}