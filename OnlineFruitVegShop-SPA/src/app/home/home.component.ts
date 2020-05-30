import { CartService } from './../_services/cart.service';
import { Component, OnInit,  EventEmitter, Output } from '@angular/core';
import { Product } from '../_models/Product';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { ProductService } from '../_services/product.service';
import { OrderCartItem } from '../_models/OrderCartItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  signinMode = false;
  regDiv = true;
  cartitems: Array<OrderCartItem> = [];
  products: any;

  RegisterSignInHomeDiv = true;
  // products: Array<Product> = [];
  product: Product;
  @Output() AddProductToCart = new EventEmitter();


  constructor(public auth: AuthService, private alertify: AlertifyService,
    public cartservice: CartService, public productservice:  ProductService) { }

  ngOnInit() {

    this.loadProducts();
    }

  registerToggle() {
    this.registerMode  = true;
  }

  signinToggle() {
    this.signinMode  = true;
  }

  CancelRegistration() {
    this.registerMode = false;
  }

  AddNewProductToCart(product) {

    this.cartservice.AddProductToCart(product);
    this.product = product;
    console.log(this.product);
  //  this.AddProductToCart.emit(this.product);
    this.cartservice.addCartItem().subscribe((carts: any) => {});
    this.cartservice.getCartItems().subscribe((products: any) => {

      console.log(products);
      this.cartservice.cartCount = <Array<OrderCartItem>>products.length;
     // this.products = products;
     // this.cartservice.cartCount = this.products.length;
   });
  }

  CancelSignInMode() {
    this.signinMode = false;
  }
  loadProducts() {

    // alert(this.auth.RegisterSignInDiv);
   // this.products = this.productservice.products;
    // this.products = this.productservice.getProducts();
    this.productservice.getProducts().subscribe((products: any) => {
      this.products = products;
        });

        if (this.auth.loggedIn()) {
          this.auth.RegisterSignInDiv = false;
          this.cartservice.getCartItems().subscribe((products: any) => {
             this.cartservice.cartCount = <Array<OrderCartItem>>products.length;
             });
          }
  }

}
