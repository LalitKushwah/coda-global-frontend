import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../provider/restaurant.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantModel } from '../model/restaurant/restaurant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  restaurantList: Array<RestaurantModel> = [];
  isRestaurantDataEmpty = false;
  searchKeyword = 'all';
  loading = true;

  constructor(private restaurantService: RestaurantService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.activatedRoute.url);

    this.restaurantService.getAllRestaurants(this.searchKeyword).subscribe((res) => {
      this.restaurantList = res.body;
      this.loading = false;
    }, err => {
      this.loading = false;
    });
  }

  getMenu(restaurant): any {
    this.restaurantService.setCurrentRestaurant(restaurant);
    this.router.navigate(['/dishes', { queryParams: restaurant.name }]);
  }

  searchWithKeyword(): void {
    console.log(this.searchKeyword);
    if (this.searchKeyword !== 'all') {
      this.restaurantService.getAllRestaurants(this.searchKeyword).subscribe(res => {
        this.restaurantList = res.body;
        this.loading = false;
      }, err => {
        this.loading = false;
      });
    }
  }

}
