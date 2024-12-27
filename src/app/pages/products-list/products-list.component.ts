import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
      @for (product of products(); track product.id) {
      <app-product-card [product]="product" />
      }
    </div>
  `,
  styles: ``,
})
export class ProductsListComponent {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'Product a',
      price: 22,
      image: 'image of product',
      stock: 0,
    },
    {
      id: 2,
      title: 'Product b',
      price: 22,
      image: 'image of product',
      stock: 1,
    },
    {
      id: 3,
      title: 'Product c',
      price: 23,
      image: 'image of product',
      stock: 44,
    },
    {
      id: 4,
      title: 'Product d',
      price: 2,
      image: 'image of product',
      stock: 6,
    },
    {
      id: 5,
      title: 'Product e',
      price: 3,
      image: 'image of product',
      stock: 20,
    },
    {
      id: 6,
      title: 'Product f',
      price: 70,
      image: 'image of product',
      stock: 90,
    },
  ]);
}
