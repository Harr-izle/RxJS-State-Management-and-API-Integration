import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interface/product';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'] 
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(private product:ProductService) { }

  ngOnInit(){
    this.product.getProducts().subscribe(
      (data: Product[]) => 
       {
        this.products = data
       },
       (error) =>{
        console.error('Error fetching data:', error);
       }
    )
  }
    
}
