import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  //  Get

  getAllProductsBySeller() {
    return this.http.get(`${environment.APIURL}/product/seller/all`);
  }

  getProductsBySellerId(id: any) {
    return this.http.get(`${environment.APIURL}/product/seller/${id}`);
  }

  getProdctById(id: any) {
    return this.http.get(`${environment.APIURL}/product/${id}`);
  }

  getAllDepartments() {
    return this.http.get(`${environment.APIURL}/department`);
  }

  getAllSubDepartment() {
    return this.http.get(`${environment.APIURL}/subDepartments`);
  }

  getAllSubSubDepartment() {
    return this.http.get(`${environment.APIURL}/subSubDepartments`);
  }

  getSellerOrders() {}

  confirmOrderStatus() {}
  // Add

  addNewProduct(product: any) {
    return this.http.post(`${environment.APIURL}/product`, product);
  }

  // Delete

  deleteProduct(id: object) {
    return this.http.delete(`${environment.APIURL}/product/${id}`);
  }

  // Update

  updateProduct(id: object, obj: object) {
    return this.http.patch(`${environment.APIURL}/product/${id}`, obj);
  }

  updateOrderStatus(id: object, status: any) {
    return this.http.patch(`${environment.APIURL}/order/${id}`, { status });
  }
}
