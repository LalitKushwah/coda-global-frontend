import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './user/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './base/header/header.component';
import { FooterComponent } from './base/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DishComponent } from './restaurant-dishes/dish/dish.component';
import { DishListComponent } from './restaurant-dishes/dish-list/dish-list.component';
import { OrdersComponent } from './order/orders/orders.component';
import { SummaryComponent } from './order/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DishComponent,
    DishListComponent,
    OrdersComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
