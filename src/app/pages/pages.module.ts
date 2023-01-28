import { PageRoutingModule } from './page-routing.module';
import { PagesComponent } from './pages.component';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CategoryComponent,
    DashboardComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule
  ],
  exports:[
    CategoryComponent,
    DashboardComponent,
    ProductComponent
  ]
})
export class PagesModule { }
