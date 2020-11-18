import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../../provider/cart-service';
import toast from 'toast-me';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {

  @Input() name: string;
  @Input() address: string;
  @Input () description: string;
  @Input() ingridiants: any;
  @Input() availablity: string;
  @Input() imgUrl: string;
  @Input() price: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addItemToCart(name, price, imgUrl): void {
    const item = { name, price, imgUrl };
    this.cartService.addItemToCart(item);
    toast('Item Added Successfully', { duration: 1000, position: 'bottom' });
  }

}
