import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

   quantityValue: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.increaseQuantity();
    this.decreaseQuantity();
  }

  increaseQuantity() {
    if (this.quantityValue >= 1) {
      return (this.quantityValue = this.quantityValue + 1);
    } else {
      return null;
    }
  }

  decreaseQuantity() {
    if (this.quantityValue <= 1) {
      return null;
    } else {
      return this.quantityValue = this.quantityValue - 1;
    }
  }


}
