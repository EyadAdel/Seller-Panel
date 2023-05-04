import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SigninComponent } from './Components/signin/signin.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { ProductsComponent } from './Components/products/products.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'products', component: ProductsComponent },
    ],
    canActivate: [AuthGuard],
  },

  { path: 'sign-in', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
