import { Component, OnInit } from '@angular/core';
import { BillingService } from '../_services/billing.service';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
  orders: any;
  products: any;
  ViewOrderdetail: any = true;
  constructor(public billingservice:  BillingService, public cartservice: CartService) { }

  ngOnInit() {
    this.billingservice.GetMyOrders().subscribe((orders: any) => {
      this.orders = orders;
    });
  }

  ViewOrder(order) {
console.log(order);
    this.cartservice.getMyOrderCartItems(order.cartId).subscribe((products: any) => {
      this.products = products;
    });
    this.ViewOrderdetail = false;
  }

}
