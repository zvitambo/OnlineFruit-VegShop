import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  model: any = {};
  @Output() CancelSignInMode = new EventEmitter();
   constructor(public auth: AuthService, private alertify: AlertifyService, private router: Router) { }
 // constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.model).subscribe(next => {
       this.alertify.success('successfully logged in');
    }, error => {
       this.alertify.error('failed to log in');
    }, () => { this.router.navigate(['/home']); });
  }

  loggedIn() {
  // return  this.auth.loggedIn();
    const token = localStorage.getItem('token');
    return !!token;
  }

  logOut() {
    localStorage.removeItem('token');
     this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }

  cancel() {
    this.CancelSignInMode.emit(false);
  }
}
