import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public auth: AuthService, private alertify: AlertifyService, private router: Router) { }
  canActivate():  boolean {

    if (this.auth.loggedIn()) {
      return true;
    }
    this.alertify.error('Unauthorized Access....');
    this.router.navigate(['/home']);
    return false;
  }
}
