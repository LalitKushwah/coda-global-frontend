import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { DishListComponent } from './restaurant-dishes/dish-list/dish-list.component';
import { SummaryComponent } from './order/summary/summary.component';
import { OrdersComponent } from '../app/order/orders/orders.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dishes',
    component: DishListComponent
  },
  {
    path: 'cart',
    component: SummaryComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
