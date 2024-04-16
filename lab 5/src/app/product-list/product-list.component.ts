import { Component } from '@angular/core';
import { categories } from '../categories';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];
  categories = [...categories];

  share(link: string) {
    window.open('https://t.me/share/url?url=' + link);
  }

  onNotify() {
    window.alert('You will be notified when the product');
  }

  deleteProduct(categoryIndex: number, productIndex: number) {
    this.categories[categoryIndex].products.splice(productIndex, 1);
  }
}
