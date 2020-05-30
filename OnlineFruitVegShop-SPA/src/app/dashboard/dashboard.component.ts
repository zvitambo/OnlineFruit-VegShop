import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { BillingService } from '../_services/billing.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { Product } from '../_models/Product';
import { OrderCartItem } from '../_models/OrderCartItem';
import { Order } from '../_models/Order';
import { OrderBillingItem } from '../_models/OrderBillingItem';
import { BillingAddress } from '../_models/BillingAddress';

import { CartItem } from '../_models/CartItem';
import { Cart } from '../_models/Cart';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: Array<Product> = [];
  cartitems: Array<OrderCartItem> = [];
  ItemscheckoutedOut: Array<CartItem>[];
  ItemsNotcheckoutedOut: Array<CartItem>[];
  carts: Array<Cart>[];
  product: Product;
  order: Order;
  orderbillingItem: OrderBillingItem;
  billingAddress: BillingAddress;
  constructor(public cartservice: CartService, public billingservice: BillingService,
    private router: Router, private alertify: AlertifyService, public auth: AuthService) {}

  ngOnInit() {


    this.cartservice.getCarts().subscribe((carts: any) => { this.carts = carts; });

    this.cartservice.GetCheckedOutCartItems(true).subscribe((CartItems: any) =>  { this.ItemscheckoutedOut = CartItems;
     });

    this.cartservice.GetCheckedOutCartItems(false).subscribe((CartItems: any) =>  { this.ItemsNotcheckoutedOut = CartItems; });
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


  }


