import { Component, OnInit } from '@angular/core';
import { BillingService } from '../_services/billing.service';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
  carts: any;
  CheckedOutProducts: any;
  UnCheckedOutProducts: any;
  ViewOrderdetail: any = false;
  constructor(public billingservice:  BillingService, public cartService: CartService) { }

  ngOnInit() {
    this.cartService.GetCheckedOutCartItems(true).subscribe((products: any) => {
      this.CheckedOutProducts = products;
    });
    this.cartService.GetCheckedOutCartItems(false).subscribe((products: any) => {
      this.UnCheckedOutProducts = products;
    });
    this.cartService.getCarts().subscribe((carts: any) => {
      this.carts = carts;
    });
  }

  ViewCart(cart) {
  }

}
