import { ProductComponent } from './product/product.component';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
  {path:'',component:PagesComponent },
    {path:'product', component:ProductComponent},
    {path:'category', component:CategoryComponent},
    
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [CommonModule,RouterModule],
})
export class PageRoutingModule { }
