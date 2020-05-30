import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Order } from '../_models/Order';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  baseUrl = environment.apiUrl + 'Order/';
  order: Order;

constructor(private http: HttpClient, public auth: AuthService) { }

GetOrders(): Observable<Order[]> {
  return this.http.get<Order[]>(this.baseUrl + 'GetOrders/' );
}

GetMyOrders(): Observable<Order[]> {
  return this.http.get<Order[]>(this.baseUrl + 'GetMyOrders/' + this.auth.decodedToken.cartid );
}

SaveOrder( model: any) {
  return this.http.post(this.baseUrl + 'SaveOrder/' , model).pipe(
    map((response: any) => {
    //  this.order = response;
        })
  );
}


}
