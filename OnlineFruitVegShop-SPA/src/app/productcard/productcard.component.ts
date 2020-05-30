import { Product } from './../_models/Product';
import { Component, OnInit, Input,  EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';


@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {

  @Output() AddProductToCart = new EventEmitter();

  @Input() product: Product;
constructor(public auth: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  AddToCart() {

    if (!this.auth.loggedIn()) {
      this.alertify.error('Please Sign in or Register to access cart items ');
    } else {
      this.AddProductToCart.emit(this.product);
      this.alertify.success('Product added to cart');
    }
  // this.AddProductToCart.emit(this.product);
  }

}
