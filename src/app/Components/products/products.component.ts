import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from 'src/app/Models/department';
import { Product } from 'src/app/Models/product';
import { Seller } from 'src/app/Models/seller';
import { SubDepartment } from 'src/app/Models/sub-department';
import { SubSubDepartment } from 'src/app/Models/sub-sub-department';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any = [];
  allDepartments: Department[] = [];
  allSubDepartments: SubDepartment[] = [];
  allSubSubDepartments: SubSubDepartment[] = [];
  sellers: any = [];
  prodDetails: any = {};
  productWillUpdateId: any;
  productValue: any = {};

  loading: boolean = false;
  file: any;
  resp: any;

  prod: any = {
    name: { ar: '', en: '' }, //done
    priceBefore: 0,
    priceAfter: 0, //done
    brand: { ar: '', en: '' }, //done
    quantity: 0, //done
    photos: [''],
    mainPhoto: '',
    productDetails: {
      ar: '',
      en: '',
    }, //done
    isActive: true,
    departmentID: '', //done
    subDepartmentID: '', //done
    nestedSubDepartment: '', //done
  };

  prodTwo: any = {
    name: { ar: '', en: '' }, //done
    priceBefore: 0,
    priceAfter: 0, //done
    brand: { ar: '', en: '' }, //done
    quantity: 0, //done
    photos: [''],
    mainPhoto: '',
    productDetails: {
      ar: '',
      en: '',
    }, //done
    isActive: true,
    departmentID: '', //done
    subDepartmentID: '', //done
    nestedSubDepartment: '', //done
  };

  prodThree: any = {
    name: { ar: '', en: '' }, //done
    priceBefore: 0,
    priceAfter: 0, //done
    brand: { ar: '', en: '' }, //done
    quantity: 0, //done
    photos: [''],
    mainPhoto: '',
    productDetails: {
      ar: '',
      en: '',
    }, //done
    isActive: true,
    departmentID: '', //done
    subDepartmentID: '', //done
    nestedSubDepartment: '', //done
  };

  constructor(
    private service: ServiceService,
    private build: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getAllDepartments();
    this.getAllSubDepartments();
    this.getAllSubSubDepartments();
    this.getAllProductsBySeller();
  }

  getphoto(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  addProduct() {
    let formData = new FormData();
    formData.append('file', this.file);
    formData.append('upload_preset', 'walmart');

    this.http
      .post('https://api.cloudinary.com/v1_1/dsfjtwsiz/upload', formData)
      .subscribe((res) => {
        this.resp = res;
        this.prod.photos = this.resp.url;
        this.prod.mainPhoto = this.prod.photos;
        this.service.addNewProduct(this.prod).subscribe((res) => {
          alert('Product added successfully, pending approval ');
          window.location.reload();
        });
      });
  }

  editProduct(productId: any, product: any) {
    this.productWillUpdateId = productId;
    this.prodTwo = product;
    console.log(productId);
    console.log(product);
  }

  viewDetails(productId: any, product: any) {
    this.prodThree = product;
  }

  getAllDepartments() {
    this.service.getAllDepartments().subscribe((result: any) => {
      this.allDepartments = result;
      result;
    });
  }

  getAllSubDepartments() {
    this.service.getAllSubDepartment().subscribe((result: any) => {
      this.allSubDepartments = result;
    });
  }

  getAllSubSubDepartments() {
    this.service.getAllSubSubDepartment().subscribe((result: any) => {
      this.allSubSubDepartments = result;
    });
  }

  removeProduct(id: any) {
    console.log(id);

    this.service.deleteProduct(id).subscribe((res) => {
      window.location.reload();
    });
  }

  updateProduct() {
    this.service
      .updateProduct(this.productWillUpdateId, this.prodTwo)
      .subscribe((res) => {});
    window.location.reload();
  }

  getAllProductsBySeller() {
    this.service.getAllProductsBySeller().subscribe((res) => {
      this.products = res;
      console.log(res);
    });
  }
}
