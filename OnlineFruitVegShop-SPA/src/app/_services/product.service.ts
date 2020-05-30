import { Injectable } from '@angular/core';
import { Product } from '../_models/Product';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.apiUrl + 'product/';
  products: Array<Product> = [];
  product: Product;

constructor(public auth: AuthService, private http: HttpClient) {
  this.product =  {productId: 0, name: '', price: 0, description: '', photoUrl: '', quantity: 0, total: 0 ,
  checkedOut: false};

  this.products = [{productId: 1, name: 'Apples', price: 12, description: 'lovely apples', photoUrl: '', quantity: 0, total: 0 ,
     checkedOut: false},
    {productId: 2, name: 'Oranges', price: 12, description: 'lovely apples', photoUrl: '', quantity: 0, total: 0, checkedOut: false  },
    {productId: 3, name: 'Bananas', price: 12, description: 'lovely apples', photoUrl: '', quantity: 0, total: 0, checkedOut: false  },
    {productId: 4, name: 'Pears', price: 12, description: 'lovely apples', photoUrl: '', quantity: 0, total: 0 , checkedOut: false },
    {productId: 5, name: 'Grapes', price: 12, description: 'lovely apples', photoUrl: '', quantity: 0, total: 0, checkedOut: false  }];
 }

getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'GetProducts/', httpOptions);
}

getProduct(productId): Observable<Product> {
  return this.http.get<Product>(this.baseUrl + 'getproduct/' + productId, httpOptions);
}

saveProduct() {
 // console.log(this.product);
  return this.http.post(this.baseUrl + 'SaveProduct/', this.product);
}

UploadfFile(data: any ) {
  // console.log(this.product);
   return this.http.post(this.baseUrl + 'UploadfFile/', data);
 }


}
