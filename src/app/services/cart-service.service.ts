import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map} from 'rxjs/operators';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<Product[]>([]);
  

  constructor() {
  
  }

  getCartItems(): Observable<Product[]> {
    return this.cartItems.asObservable();
  }

  addToCart(product: Product): void {
    const currentItems = this.cartItems.getValue();
    const existingItem = currentItems.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
      this.cartItems.next([...currentItems]);
    } else {
      this.cartItems.next([...currentItems, { ...product, quantity: 1 }]);
    }
  }

  removeFromCart(productId: number): void {
    const currentItems = this.cartItems.getValue();
    const updatedItems = currentItems.filter(item => item.id !== productId);
    this.cartItems.next(updatedItems);
  }

  removeAll(): void {
    const currentItems = this.cartItems.getValue();
    currentItems.forEach(item => {
      this.removeFromCart(item.id);
    });
  }

  clearCart(): void {
    this.cartItems.next([]);
  }

  getTotalItems(): Observable<number> {
    return this.cartItems.pipe(
      map(items => items.reduce((total, item) => total + item.quantity, 0))
    );
  }
}