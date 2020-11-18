import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../../../provider/restaurant.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent implements OnInit {

  list = [];

  restaurantName = '';

  constructor( private route: ActivatedRoute, private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(res => {
      this.restaurantName = res.restaurantName;
      this.list = this.restaurantService.getCurrentRestaurant(this.restaurantName).menu;
    });
  }

}
