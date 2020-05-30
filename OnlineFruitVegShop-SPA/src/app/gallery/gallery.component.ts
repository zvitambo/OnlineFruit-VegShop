import { Product } from '../_models/Product';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { ProductService } from '../_services/product.service';
import { OnInit, Component, Output, EventEmitter } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { OrderCartItem } from '../_models/OrderCartItem';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  registerMode = false;
  signinMode = false;
  regDiv = true;
  products: any;

  product: Product;
  @Output() AddProductToCart = new EventEmitter();


  constructor(public auth: AuthService, private alertify: AlertifyService,
    public cartservice: CartService, public productservice:  ProductService) { }

  ngOnInit() {

    this.loadProducts();
   // if (this.auth.loggedIn) {this.registerMode = false; }
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

  // AddNewProductToCart(product) {

  //   this.cartservice.AddProductToCart(product);
  //   this.product = product;
  //   this.AddProductToCart.emit(this.product);
  //   this.cartservice.addCartItem().subscribe((carts: any) => {});
  // }

  CancelSignInMode() {
    this.signinMode = false;
  }
  loadProducts() {
    this.productservice.getProducts().subscribe((products: any) => {
      this.products = products;
    });
  }
}
