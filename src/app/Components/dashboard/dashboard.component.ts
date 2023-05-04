import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { AuthService } from 'src/app/auth/auth.service';
import { SigninComponent } from '../signin/signin.component';
import { Product } from 'src/app/Models/product';
import { Seller } from 'src/app/Models/seller';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  orders: any[] = [];
  products: Product[] = [];

  currentSeller: any = {};

  allProducts: any = [];
  sellerProducts: any = [];

  shipped: number = 0;
  cancelled: number = 0;
  deliverd: number = 0;
  pending: number = 0;
  confirmed: number = 0;
  seller: any;
  constructor(
    private _router: Router,
    private service: ServiceService,
    private auth: AuthService,
    private injector: Injector
  ) {}

  ngOnInit(): void {
    this.seller = localStorage.getItem('seller');
    this.currentSeller = JSON.parse(this.seller);
    console.log(this.currentSeller);
    this.getAllProductsBySeller();
    this.getProductsBySellerId();
  }

  getAllProductsBySeller() {
    this.service.getAllProductsBySeller().subscribe((res) => {
      console.log(res);
      this.allProducts = res;
    });
  }

  getProductsBySellerId() {
    this.service
      .getProductsBySellerId(this.currentSeller._id)
      .subscribe((res) => {
        console.log(res);
        this.sellerProducts = res;
      });
  }

  logOut() {
    localStorage.clear();
    this._router.navigate(['/sign-in']);
  }
}
