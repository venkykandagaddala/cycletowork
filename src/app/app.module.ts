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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductEditComponent } from './products/product-details/product-edit/product-edit.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';



const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: "users", component: UsersComponent },
  { path: "users/:id", component: UserDetailsComponent},
  { path: "companies", component: CompaniesComponent },
  { path: "products", component: ProductsComponent},
  { path: "products/new", component: ProductEditComponent},
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'products/:id/edit', component: ProductEditComponent },
  { path: "login", component: AuthComponent}
  
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
    LoaderComponent,
    ProductEditComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, ProductService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
