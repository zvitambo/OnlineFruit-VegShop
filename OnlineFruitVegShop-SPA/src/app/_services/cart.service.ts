import { CartItem } from './../_models/CartItem';
import { Injectable } from '@angular/core';
import { Product } from '../_models/Product';
// import { Cart } from '../_models/Cart';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { OrderCartItem } from '../_models/OrderCartItem';
import { Cart } from '../_models/Cart';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  // baseUrl = environment.apiUrl + '/Cartitem/';
  baseUrl = environment.apiUrl;
  products: Array<Product> = [];
  cartitems: Array<OrderCartItem> = [];
  cartCount: any = 0;
  totalSum: any = 0;
  CartId: any = 0;
  Username: any;
  cartItem: any;
constructor (public auth: AuthService, private http: HttpClient) { }




getCartItems(): Observable<Product[]> {
  this.CartId =  this.auth.decodedToken.cartid;
  return this.http.get<Product[]>(this.baseUrl + 'Cartitem/GetCartItems/' + this.CartId);
}

getCarts(): Observable<Cart[]> {
  return this.http.get<Cart[]>(this.baseUrl + 'Cart/GetCarts/' );
}


GetCheckedOutCartItems(CheckedOut): Observable<CartItem[]> {
  return this.http.get<CartItem[]>(this.baseUrl + 'Cartitem/GetCheckedOutCartItems/' + CheckedOut );
}

getMyOrderCartItems(id): Observable<Product[]> {
  return this.http.get<Product[]>(this.baseUrl + 'Cartitem/GetOrderCartItemProducts/' + id);
}

addCartItem( ) {

  return this.http.post(this.baseUrl + 'Cartitem/SaveCartItem/' , this.cartItem);
}

RemoveCartItem(model: any ) {

  return this.http.post(this.baseUrl + 'Cartitem/RemoveCartItem/' , model);
}



AddProductToCart(product) {
this.products.push(product);
this.cartCount = this.products.length;
this.CartId =  this.auth.decodedToken.cartid;
this.cartItem = { id : 0, cartId: this.CartId, productId: product.id, orderId: 0,
   quantity: 1, CheckedOut: false, total: product.price };
  }

RefreshCartCount(products) {
  this.cartCount = products.length;
}



}
