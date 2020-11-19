import { Component, OnDestroy, OnInit } from '@angular/core';
import { RestaurantService } from '../../../provider/restaurant.service';
import { CartService } from '../../../provider/cart-service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit , OnDestroy {
  itemCount = 0;
  countSubscription: Subscription;

  constructor(private cartService: CartService, public router: Router) {

  }

  ngOnInit(): void {
    this.countSubscription = this.cartService.getCartSubject().subscribe((res) => {
      console.log(res);
      this.itemCount = res;
    });
  }

  ngOnDestroy(): void {
    this.countSubscription.unsubscribe();
  }

}
