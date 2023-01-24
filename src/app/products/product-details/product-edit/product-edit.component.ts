import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../../product.model';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  editMode = false;
  productId: number;
  source: string;
  productForm: FormGroup;
  isFormSubmited: boolean = false;
  localProduct: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.productId = +params["id"];
      this.editMode = params["id"] != null;
      this.source = params['source'];
      this.intilizeForm()
    })

    this.source = this.route.snapshot.queryParams['source']
  }

  intilizeForm() {

    if (this.editMode) {
      this.productService.getProduct(this.productId).subscribe((product: Product) => {
        this.localProduct = product;
        this.productForm = new FormGroup({
          "productData" : new FormGroup({
            "title" : new FormControl(product.title, Validators.required),
            "description" : new FormControl(product.description, Validators.required),
            "price" : new FormControl(product.price, Validators.required),
            "discountPercentage" : new FormControl(product.discountPercentage, Validators.required),
            "rating" : new FormControl(product.rating, Validators.required),
            "stock" : new FormControl(product.stock, Validators.required),
            "brand" : new FormControl(product.brand, Validators.required),
            "category" : new FormControl(product.category, Validators.required),
            "thumbnail" : new FormControl(product.thumbnail, Validators.required)
          })
        }) 
      });
    } else {
      this.productForm = new FormGroup({
        "productData" : new FormGroup({
          "title" : new FormControl(null, Validators.required),
          "description" : new FormControl(null, Validators.required),
          "price" : new FormControl(null, Validators.required),
          "discountPercentage" : new FormControl(null, Validators.required),
          "rating" : new FormControl(null, Validators.required),
          "stock" : new FormControl(null, Validators.required),
          "brand" : new FormControl(null, Validators.required),
          "category" : new FormControl(null, Validators.required),
          "thumbnail" : new FormControl(null, Validators.required)
        })      
      })
    }
    
  }

  onSubmit(){
    if (this.productForm?.valid){
      this.isFormSubmited = true;
      let productData = this.productForm.get('productData')?.value
      if (this.editMode) {
        this.productService.updateProduct(productData, this.productId).subscribe((resp: Product) => {
          console.log("scope" + resp)
          if(resp['id']) {
            this.isFormSubmited = false;
            this.productForm.reset();
            this.router.navigate(["/products"])
          }
        }, (error: any) => {
          this.isFormSubmited = false;
          console.log(error?.message)
        })
      } else {
        this.productService.addProduct(productData).subscribe((resp: Product) => {
          if (resp['id']) {
            this.isFormSubmited = false;
            this.productForm.reset();
            this.router.navigate(["/products"])
          }
        }, (error: any) => {
          this.isFormSubmited = false;
          console.log(error?.message)
        })
      }      
    }   
    
  }

}
