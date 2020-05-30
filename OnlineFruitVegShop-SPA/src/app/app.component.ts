import { Component, OnInit,  EventEmitter, Output } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Product } from './_models/Product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jwtHelper = new JwtHelperService();
  product: Product;
  products: Product[];
  constructor(private auth: AuthService) {}
  ngOnInit() {

    const token = localStorage.getItem('token');
    if (token) {
      this.auth.decodedToken = this.auth.jwtHelper.decodeToken(token);
    }  }
}
