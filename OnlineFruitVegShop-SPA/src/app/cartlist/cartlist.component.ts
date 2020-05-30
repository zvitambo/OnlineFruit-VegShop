import { Product } from './../_models/Product';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { Router } from '@angular/router';
import { CartItem } from '../_models/CartItem';
import { OrderCartItem } from '../_models/OrderCartItem';


@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {
  products: Array<Product> = [];
  cartitems: Array<OrderCartItem> = [];
  product: Product;
  totalSum: any = 0;
  totalProductSum: any = 0;
  validcart: any = false;
  constructor(public cartservice: CartService, private router: Router) { }

  ngOnInit() {
    this.cartservice.getCartItems().subscribe((products: any) => {
      this.cartservice.cartCount = 0;
      this.cartitems = <Array<OrderCartItem>>products;
      console.log(this.cartitems);
      this.cartservice.cartCount = this.cartitems.length;
      this.refreshTotal();
       if (this.cartitems.values != null) {this.validcart = true; } else {this.validcart = false; }
   });
   this.refreshTotal();
  }

  ReFreshCartItems() {
    this.cartservice.getCartItems().subscribe((products: any) => {
      console.log(products);
      this.cartitems = <Array<OrderCartItem>>products;
      this.cartservice.cartCount = this.cartitems.length;
      this.refreshTotal();
      console.log(this.cartitems.length);
       if (this.cartitems.values != null) {this.validcart = true; } else {this.validcart = false; }
   });

  }

  increaseQuantity(item) {
    item.total = item.product.price * item.quantity;
    this.refreshTotal();
  }
  removeProduct(product) {

    this.cartservice.RemoveCartItem(product).subscribe((products: any) => {

      if (this.cartitems[0] != null)  {
       const index = this.cartitems.indexOf(product.productId , 0);
      this.cartitems.splice(index, 1);
      this.cartitems = products;
  //    this.cartservice.cartCount = this.cartitems.length;
      this.ReFreshCartItems();

      }
          });
    // const index = this.products.indexOf(product.productId , 0);
    // this.products.splice(index, 1);
    this.cartservice.RefreshCartCount(this.cartitems);
    // this.ReFreshCartItems();
  //  this.refreshTotal();
  }

  refreshTotal() {
    this.totalSum = 0;
    this.sumCart(this.cartitems);
    if (this.totalSum > 0) {this.validcart = true; } else {this.validcart = false; }
  }

  sumCart(data) {
    for (let i  = 0 ; i < data.length; i ++) {
      this.totalSum += data[i].product.price * data[i].quantity;
    }
   }

   checkOut() {
     if ( this.totalSum > 0 )  {
      this.cartservice.totalSum = this.totalSum;
      this.cartservice.cartitems = this.cartitems;
       this.router.navigate(['/billing']);
     }
   }

}
