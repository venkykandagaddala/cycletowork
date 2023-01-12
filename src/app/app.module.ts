import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CompaniesComponent } from './companies/companies.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserService } from './users/user.service';
import { UserListItemComponent } from './users/user-list-item/user-list-item.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductService } from './products/product.service';
import { ProductListItemComponent } from './products/product-list/product-list-item/product-list-item.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { LoaderComponent } from './shared/loader/loader.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: "users", component: UsersComponent },
  { path: "users/:id", component: UserDetailsComponent},
  { path: "companies", component: CompaniesComponent },
  { path: "products", component: ProductsComponent},
  { path: 'products/:id', component: ProductDetailsComponent }
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UsersComponent,
    CompaniesComponent,
    UserListComponent,
    UserListItemComponent,
    UserDetailsComponent,
    ProductsComponent,
    ProductListComponent,
    ProductListItemComponent,
    ProductDetailsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
