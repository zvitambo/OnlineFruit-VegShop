import { BillingAddress } from './../_models/BillingAddress';
import { Product } from './../_models/Product';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../_services/cart.service';
import { BillingService } from '../_services/billing.service';
import { AlertifyService } from '../_services/alertify.service';
import { Order } from '../_models/Order';
import { AuthService } from '../_services/auth.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { CartItem } from '../_models/CartItem';
import { OrderBillingItem } from '../_models/OrderBillingItem';
import { OrderCartItem } from '../_models/OrderCartItem';


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  products: Array<Product> = [];
  cartitems: Array<OrderCartItem> = [];
  product: Product;
  order: Order;
  orderbillingItem: OrderBillingItem;
  billingAddress: BillingAddress;
  constructor(public cartservice: CartService, public billingservice: BillingService,
     private router: Router, private alertify: AlertifyService, public auth: AuthService) { }

  ngOnInit() {
    this.cartitems = this.cartservice.cartitems;
        this.billingAddress = {
      id: 0,
      firstname: '',
      lastname: '',
      emailAddress: '',
      address: '',
      address2: '',
      country: '',
      state: '',
      zip: '' };

      this.orderbillingItem = {
        id: 0,
    cartId: 0,
    totalAmount: 0,
    date: '',
    billingAddress: this.billingAddress,
    cartitems: [] };

    }

  PlaceOrder() {


    if (this.billingAddress.address !== '' ) {
      this.orderbillingItem.billingAddress = this.billingAddress;
      this.orderbillingItem.cartitems.push(this.cartitems);
      this.orderbillingItem.totalAmount = this.cartservice.totalSum;
      this.orderbillingItem.cartId = this.cartitems[0].cartId;

    console.log(this.orderbillingItem);
    // this.billingservice.SaveOrder(this.order);
    this.billingservice.SaveOrder(this.orderbillingItem).subscribe((order: any) => {
       this.orderbillingItem = order;
       this.alertify.success('Order Placed successfully');
       this.router.navigate(['/gallery']);
    });
    } else {
      this.alertify.error('Billing Details  required');
    }
  }

}

