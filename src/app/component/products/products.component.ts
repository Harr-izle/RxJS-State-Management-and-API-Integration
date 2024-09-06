import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { CartService } from'../../services/cart-service.service';
import { Product } from '../../interface/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  cartItems$: Observable<Product[]>;
  totalItems$: Observable<number>;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.products$ = this.productService.getProducts();
    this.cartItems$ = this.cartService.getCartItems();
    this.totalItems$ = this.cartService.getTotalItems();
  }

  ngOnInit() {}

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  
  removeAllItems(): void {
    this.cartService.removeAll();
  }


}