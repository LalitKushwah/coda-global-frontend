import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../../provider/cart-service';
import { OrderService } from '../../../provider/order.service';
import toast from 'toast-me';
import { Router } from '@angular/router';
import constants from 'src/app/utility/constants';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, AfterViewInit, OnDestroy {

  cart = [];
  order: any = {};
  totalPrice = 0;
  constructor(private cartService: CartService, private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    let sum = 0;
    this.cart.map(product => {
      sum = sum + Number(product.price);
    });
    this.totalPrice = sum;
  }

  submitOrder(): void {
    this.order.products = this.cart;
    console.log(this.order.products);
    this.order.userId = localStorage.getItem('userId');
    this.orderService.createOrder(this.order).subscribe(res => {
      toast('Order has been placed successfully', { duration: constants.toast.timeout });
      this.cartService.resetCart();
      this.router.navigate(['orders']);
    }, err => {
      toast(err, { duration: constants.toast.timeout });
    });
  }

  ngAfterViewInit(): void {
    const element = document.getElementById('footer');
  }

  ngOnDestroy(): void {
    const element = document.getElementById('footer');
  }

}
