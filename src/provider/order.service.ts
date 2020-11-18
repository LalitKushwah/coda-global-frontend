import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import constants from '../app/utility/constants';


@Injectable({providedIn: 'root'})
export class OrderService {

  constructor(
    private httpClient: HttpClient
  ) {}

  createOrder(data): Observable<any> {
    return this.httpClient.post(
      `${environment.serverConfig.apiUrl}${constants.apiMethods.createOrder}`,
      data
    );
  }

  getOrders(userId): Observable<any> {
    return this.httpClient.get(
        `${environment.serverConfig.apiUrl}${constants.apiMethods.getOrders}${userId}`
      );
  }
}
