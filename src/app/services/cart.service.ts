import { Injectable } from '@angular/core';
import { Product } from '../models/products.model';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([{
    id:3,
    title:'Product c',
    price: 22,
    image:'image of product',
    stock: 44,
  },
  {
    id:4,
    title:'Product d',
    price: 22,
    image: 'image of product',
    stock: 6,
  },]);

  addToCart(product : Product){
    this.cart.set([...this.cart(),product])
  }

  removeFromCart(id:number){
    this.cart.set(this.cart().filter((p) => p.id !== id));
  }

  constructor() { }
}
