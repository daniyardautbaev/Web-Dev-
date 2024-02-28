import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products'; 

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css'
})

export class ProductAlertsComponent {
  remove_item(): void{
  }
  @Input() likes: number = 0;
  isLiked = false;
  toggleLike(): void {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.likes++;
    } else {
      this.likes--;
    }
  }
  

}
