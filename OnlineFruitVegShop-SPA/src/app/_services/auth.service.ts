import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl =   environment.apiUrl + 'auth/';
  RegisterSignInDiv = true;

// baseUrl = environment.apiUrl + 'auth/';
jwtHelper = new JwtHelperService();
 decodedToken: any;


constructor(private http: HttpClient, private router: Router) { }

login( model: any) {
  return this.http.post(this.baseUrl + 'login' , model).pipe(
    map((response: any) => {
      const user = response;

      this.RegisterSignInDiv = false;
      if (user) {
        localStorage.setItem('token', user.token);
        this.decodedToken = this.jwtHelper.decodeToken(user.token);
        this.router.navigate(['/home']);
            }
    })
  );
}

register( model: any) {
  return this.http.post(this.baseUrl + 'register' , model);
}

loggedIn() {

  const token = localStorage.getItem('token');
   return !this.jwtHelper.isTokenExpired(token);
}


}
