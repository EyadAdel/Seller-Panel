import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

import { ProductsComponent } from './Components/products/products.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { HeaderComponent } from './Shared/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './Shared/spinner/spinner.component';
import { AdminComponent } from './Components/admin/admin.component';
import { SigninComponent } from './Components/signin/signin.component';
import { AuthGuard } from './guard/auth.guard';
import { TokenInterceptorService } from './token/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,

    ProductsComponent,

    OrdersComponent,

    SpinnerComponent,
    AdminComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
