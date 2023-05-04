import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _loginUrl = `${environment.APIURL}/seller/login`;

  constructor(private http: HttpClient) {}

  loginSeller(seller: any) {
    return this.http.post<any>(this._loginUrl, seller);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
