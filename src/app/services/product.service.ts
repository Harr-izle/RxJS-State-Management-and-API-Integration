import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = 'https://api.escuelajs.co/api/v1/categories';
  
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);

  }
}
