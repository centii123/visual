import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from '../models/product.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  url:string='http://api.escuelajs.co/api/v1/products'

  constructor(private HttpClient:HttpClient) { }

   get():Observable<Object>{
    return this.HttpClient.get(this.url)
  }

}
