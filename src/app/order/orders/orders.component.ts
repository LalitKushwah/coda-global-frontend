import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../provider/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  currentOrder = true;
  pastOrder = false;
  orders = [];
  activeOrders = [];
  pastOrders = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders(localStorage.getItem('userId')).subscribe(res => {
      this.orders = res.body;
      this.activeOrders = this.orders.filter(order => order.orderStatus === 'in-progress');
      console.log(this.activeOrders);
      this.pastOrders = this.orders.filter(order => order.orderStatus === 'delievered');
    }, err => {
      console.error(err);
    });
  }

  // ngAfterViewInit(): void {
  //   const element = document.getElementById('footer');
  //   element.classList.add('footer-sticky');
  // }

  // ngOnDestroy(): void {
  //   const element = document.getElementById('footer');
  //   element.classList.remove('footer-sticky');
  // }

  showCurrentOrders(): void {
    this.pastOrder = false;
    this.currentOrder = true;
  }
  showPastOrders(): void {
    this.pastOrder = true;
    this.currentOrder = false;
  }

}
