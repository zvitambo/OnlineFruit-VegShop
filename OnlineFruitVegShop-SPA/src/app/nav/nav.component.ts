import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Product } from '../_models/Product';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  product: Product;
  model: any = {};
   constructor(public auth: AuthService, private alertify: AlertifyService, private router: Router, public cartservice: CartService) { }

  ngOnInit() { }

  login() {
    this.auth.login(this.model).subscribe(next => {
      this.alertify.success('successfully logged in');
    }, error => {
    this.alertify.error('failed to log in');
    }, () => { this.router.navigate(['/home']); });
  }

  loggedIn() {
   return  this.auth.loggedIn();
    // const token = localStorage.getItem('token');
    // return !!token;
  }
 isAdmin() {

  // console.log(this.auth.decodedToken);
    return  this.auth.decodedToken.role === 'admin';
  }

  logOut() {

     this.auth.RegisterSignInDiv = true;
    localStorage.removeItem('token');
   this.alertify.message('logged out');
    this.router.navigate(['/home']);
    }
       // AddToNavCart(product) {
    //   this.products.push(product);
    //   this.cartCount = this.products.length;
    // }
}
