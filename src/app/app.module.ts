import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserComponent } from './pages/user/user.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ErrorComponent } from './pages/error/error.component';
import { ShopingCartComponent } from './pages/shoping-cart/shoping-cart.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { StatisticsComponent } from './components/Ui/statistics/statistics.component';
import { AboutComponent } from './components/Ui/about/about.component';
import { OrderListComponent } from './components/Ui/order-list/order-list.component';
import { OrderDetailsComponent } from './components/Ui/order-details/order-details.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    UserComponent,
    UserProfileComponent,
    DashBoardComponent,
    DashboardComponent,
    ProductsListComponent,
    ProductDetailComponent,
    ProductDetailsComponent,
    ErrorComponent,
    ShopingCartComponent,
    ShoppingCartComponent,
    ContactComponent,
    CheckoutComponent,
    StatisticsComponent,
    AboutComponent,
    OrderListComponent,
    OrderDetailsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
