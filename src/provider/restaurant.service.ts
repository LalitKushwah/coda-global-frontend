import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../environments/environment';
import constants from '../app/utility/constants';

@Injectable({ providedIn: 'root' })
export class RestaurantService {

    currRestaurant = {};

    constructor(
        private httpClient: HttpClient
      ) {}

    getAllRestaurants(searchTerm): Observable<any> {
        return this.httpClient.get(
            `${environment.serverConfig.apiUrl}${constants.apiMethods.loadRstaurants}?searchTerm=${searchTerm}`
          );
    }

    setCurrentRestaurant(restaurant): void {
        this.currRestaurant = restaurant;
    }

    getCurrentRestaurant(name): any {
        return this.currRestaurant;
    }
}
