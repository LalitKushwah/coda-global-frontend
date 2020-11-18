import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../provider/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  restaurantList = [];
  isPropertyDataEmpty = false;
  searchKeyword = 'all';
  loading = true;

  constructor(private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit(): void {
    this.restaurantService.getAllRestaurants(this.searchKeyword).subscribe(res => {
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
