import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  loginSellerData = {
    businessEmail: '',
    password: '',
  };

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  loginSeller() {
    this._auth.loginSeller(this.loginSellerData).subscribe((res) => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('seller', JSON.stringify(res.seller));
      this._router.navigate(['']);
    });
  }
}
