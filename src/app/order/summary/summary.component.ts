import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../provider/cart-service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  cart = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    console.log(this.cart);
  }

}
