import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductsComponent } from './products/products.component';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [ProductComponent, ProductsComponent],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
