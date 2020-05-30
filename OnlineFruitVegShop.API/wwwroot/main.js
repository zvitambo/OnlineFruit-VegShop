(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/WeatherComponent/WeatherComponent.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/WeatherComponent/WeatherComponent.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1dlYXRoZXJDb21wb25lbnQvV2VhdGhlckNvbXBvbmVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/WeatherComponent/WeatherComponent.component.html":
/*!******************************************************************!*\
  !*** ./src/app/WeatherComponent/WeatherComponent.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngFor=\"let value of values\">\n  {{value.summary}}\n</p>\n"

/***/ }),

/***/ "./src/app/WeatherComponent/WeatherComponent.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/WeatherComponent/WeatherComponent.component.ts ***!
  \****************************************************************/
/*! exports provided: WeatherComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponentComponent", function() { return WeatherComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var WeatherComponentComponent = /** @class */ (function () {
    function WeatherComponentComponent(httpClient) {
        this.httpClient = httpClient;
    }
    WeatherComponentComponent.prototype.ngOnInit = function () {
        this.getValues();
    };
    WeatherComponentComponent.prototype.getValues = function () {
        var _this = this;
        this.httpClient.get('http://localhost:5000/WeatherForecast').subscribe(function (response) {
            _this.values = response;
        }, function (error) {
            console.log(error);
        });
    };
    WeatherComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-weathercomponent',
            template: __webpack_require__(/*! ./WeatherComponent.component.html */ "./src/app/WeatherComponent/WeatherComponent.component.html"),
            styles: [__webpack_require__(/*! ./WeatherComponent.component.css */ "./src/app/WeatherComponent/WeatherComponent.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WeatherComponentComponent);
    return WeatherComponentComponent;
}());



/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, alertify, router) {
        this.auth = auth;
        this.alertify = alertify;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.loggedIn()) {
            return true;
        }
        this.alertify.error('Unauthorized Access....');
        this.router.navigate(['/home']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_services/alertify.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/alertify.service.ts ***!
  \***********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallback) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else { }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'auth/';
        this.RegisterSignInDiv = true;
        // baseUrl = environment.apiUrl + 'auth/';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
    }
    AuthService.prototype.login = function (model) {
        var _this = this;
        return this.http.post(this.baseUrl + 'login', model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var user = response;
            _this.RegisterSignInDiv = false;
            if (user) {
                localStorage.setItem('token', user.token);
                _this.decodedToken = _this.jwtHelper.decodeToken(user.token);
                _this.router.navigate(['/home']);
            }
        }));
    };
    AuthService.prototype.register = function (model) {
        return this.http.post(this.baseUrl + 'register', model);
    };
    AuthService.prototype.loggedIn = function () {
        var token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/billing.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/billing.service.ts ***!
  \**********************************************/
/*! exports provided: BillingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingService", function() { return BillingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/_services/auth.service.ts");






var BillingService = /** @class */ (function () {
    function BillingService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'Order/';
    }
    BillingService.prototype.GetOrders = function () {
        return this.http.get(this.baseUrl + 'GetOrders/');
    };
    BillingService.prototype.GetMyOrders = function () {
        return this.http.get(this.baseUrl + 'GetMyOrders/' + this.auth.decodedToken.cartid);
    };
    BillingService.prototype.SaveOrder = function (model) {
        return this.http.post(this.baseUrl + 'SaveOrder/', model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            //  this.order = response;
        }));
    };
    BillingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], BillingService);
    return BillingService;
}());



/***/ }),

/***/ "./src/app/_services/cart.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/cart.service.ts ***!
  \*******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");


// import { Cart } from '../_models/Cart';



var CartService = /** @class */ (function () {
    function CartService(auth, http) {
        this.auth = auth;
        this.http = http;
        // baseUrl = environment.apiUrl + '/Cartitem/';
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this.products = [];
        this.cartitems = [];
        this.cartCount = 0;
        this.totalSum = 0;
        this.CartId = 0;
    }
    CartService.prototype.getCartItems = function () {
        this.CartId = this.auth.decodedToken.cartid;
        return this.http.get(this.baseUrl + 'Cartitem/GetCartItems/' + this.CartId);
    };
    CartService.prototype.getCarts = function () {
        return this.http.get(this.baseUrl + 'Cart/GetCarts/');
    };
    CartService.prototype.GetCheckedOutCartItems = function (CheckedOut) {
        return this.http.get(this.baseUrl + 'Cartitem/GetCheckedOutCartItems/' + CheckedOut);
    };
    CartService.prototype.getMyOrderCartItems = function (id) {
        return this.http.get(this.baseUrl + 'Cartitem/GetOrderCartItemProducts/' + id);
    };
    CartService.prototype.addCartItem = function () {
        return this.http.post(this.baseUrl + 'Cartitem/SaveCartItem/', this.cartItem);
    };
    CartService.prototype.RemoveCartItem = function (model) {
        return this.http.post(this.baseUrl + 'Cartitem/RemoveCartItem/', model);
    };
    CartService.prototype.AddProductToCart = function (product) {
        this.products.push(product);
        this.cartCount = this.products.length;
        this.CartId = this.auth.decodedToken.cartid;
        this.cartItem = { id: 0, cartId: this.CartId, productId: product.id, orderId: 0,
            quantity: 1, CheckedOut: false, total: product.price };
    };
    CartService.prototype.RefreshCartCount = function (products) {
        this.cartCount = products.length;
    };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/_services/product.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/product.service.ts ***!
  \**********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
};
var ProductService = /** @class */ (function () {
    function ProductService(auth, http) {
        this.auth = auth;
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'product/';
        this.products = [];
        this.product = { productId: 0, name: '', price: 0, description: '', photoUrl: '', quantity: 0, total: 0,
            checkedOut: false };
        this.products = [{ productId: 1, name: 'Apples', price: 12, description: 'lovely apples', photoUrl: '', quantity: 0, total: 0,
                checkedOut: false },
            { productId: 2, name: 'Oranges', price: 12, description: 'lovely apples', photoUrl: '', quantity: 0, total: 0, checkedOut: false },
            { productId: 3, name: 'Bananas', price: 12, description: 'lovely apples', photoUrl: '', quantity: 0, total: 0, checkedOut: false },
            { productId: 4, name: 'Pears', price: 12, description: 'lovely apples', photoUrl: '', quantity: 0, total: 0, checkedOut: false },
            { productId: 5, name: 'Grapes', price: 12, description: 'lovely apples', photoUrl: '', quantity: 0, total: 0, checkedOut: false }];
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.baseUrl + 'GetProducts/', httpOptions);
    };
    ProductService.prototype.getProduct = function (productId) {
        return this.http.get(this.baseUrl + 'getproduct/' + productId, httpOptions);
    };
    ProductService.prototype.saveProduct = function () {
        // console.log(this.product);
        return this.http.post(this.baseUrl + 'SaveProduct/', this.product);
    };
    ProductService.prototype.UploadfFile = function (data) {
        // console.log(this.product);
        return this.http.post(this.baseUrl + 'UploadfFile/', data);
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav ></app-nav>\n <!-- <app-home (AddProductToCart)=\"AddProductToCart($event)\"></app-home>  -->\n <!-- <app (AddToNavCart)=\"AddToNavCart($event)\"></app> -->\n<router-outlet ></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        if (token) {
            this.auth.decodedToken = this.auth.jwtHelper.decodeToken(token);
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_billing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services/billing.service */ "./src/app/_services/billing.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/product.service */ "./src/app/_services/product.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services/cart.service */ "./src/app/_services/cart.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _WeatherComponent_WeatherComponent_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./WeatherComponent/WeatherComponent.component */ "./src/app/WeatherComponent/WeatherComponent.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _myorders_myorders_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./myorders/myorders.component */ "./src/app/myorders/myorders.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _carts_carts_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./carts/carts.component */ "./src/app/carts/carts.component.ts");
/* harmony import */ var _cartlist_cartlist_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cartlist/cartlist.component */ "./src/app/cartlist/cartlist.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _productcard_productcard_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./productcard/productcard.component */ "./src/app/productcard/productcard.component.ts");
/* harmony import */ var _billing_billing_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./billing/billing.component */ "./src/app/billing/billing.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");































function tokenGetter() {
    return localStorage.getItem('token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _WeatherComponent_WeatherComponent_component__WEBPACK_IMPORTED_MODULE_14__["WeatherComponentComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_15__["NavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_18__["SigninComponent"],
                _myorders_myorders_component__WEBPACK_IMPORTED_MODULE_19__["MyordersComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_20__["ProductsComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_21__["OrdersComponent"],
                _carts_carts_component__WEBPACK_IMPORTED_MODULE_22__["CartsComponent"],
                _cartlist_cartlist_component__WEBPACK_IMPORTED_MODULE_23__["CartlistComponent"],
                _productcard_productcard_component__WEBPACK_IMPORTED_MODULE_27__["ProductcardComponent"],
                _billing_billing_component__WEBPACK_IMPORTED_MODULE_28__["BillingComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_29__["DashboardComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_30__["GalleryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_25__["appRoutes"]),
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:5000'],
                        blacklistedRoutes: ['localhost:5000/api/auth']
                    }
                })
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
                _services_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"],
                _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
                _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
                _services_billing_service__WEBPACK_IMPORTED_MODULE_1__["BillingService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/billing/billing.component.css":
/*!***********************************************!*\
  !*** ./src/app/billing/billing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JpbGxpbmcvYmlsbGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/billing/billing.component.html":
/*!************************************************!*\
  !*** ./src/app/billing/billing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"cart-box-main\">\n  <div class=\"container\">\n    \n      <div class=\"row\">\n          <div class=\"col-sm-6 col-lg-6 mb-3\">\n              <div class=\"checkout-address\">\n                  <div class=\"title-left\">\n                      <h3>Billing address</h3>\n                  </div>\n                  <form #billingForm=\"ngForm\"  class=\"needs-validation\" novalidate>\n                      <div class=\"row\">\n                          <div class=\"col-md-6 mb-3\">\n                              <label for=\"firstName\">First name </label>\n                              <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"\" value=\"\" name=\"firstname\" [(ngModel)]=\"billingAddress.firstname\"  required>\n                              <div class=\"invalid-feedback\"> Valid first name is required. </div>\n                          </div>\n                          <div class=\"col-md-6 mb-3\">\n                              <label for=\"lastName\">Last name </label>\n                              <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"\" value=\"\" name=\"lastname\" [(ngModel)]=\"billingAddress.lastname\" required>\n                              <div class=\"invalid-feedback\"> Valid last name is required. </div>\n                          </div>\n                      </div>\n                      <div class=\"mb-3\">\n                          <label for=\"username\">Username </label>\n                          <div class=\"input-group\">\n                              <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"\" name=\"username\" [(ngModel)]=\"cartservice.Username\" required>\n                              <div class=\"invalid-feedback\" style=\"width: 100%;\"> Your username is required. </div>\n                          </div>\n                      </div>\n                      <div class=\"mb-3\">\n                          <label for=\"email\">Email Address </label>\n                          <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"billingAddress.emailAddress\" placeholder=\"\">\n                          <div class=\"invalid-feedback\"> Please enter a valid email address for shipping updates. </div>\n                      </div>\n                      <div class=\"mb-3\">\n                          <label for=\"address\">Address </label>\n                          <input type=\"text\" class=\"form-control\" name=\"address\" id=\"address\" [(ngModel)]=\"billingAddress.address\" placeholder=\"\" required>\n                          <div class=\"invalid-feedback\"> Please enter your shipping address. </div>\n                      </div>\n                      <div class=\"mb-3\">\n                          <label for=\"address2\">Address 2 </label>\n                          <input type=\"text\" class=\"form-control\" id=\"address2\" name=\"address2\" [(ngModel)]=\"billingAddress.address2\" placeholder=\"\"> </div>\n                      <div class=\"row\">\n                          <div class=\"col-md-5 mb-3\">\n                              <label for=\"country\">Country </label>\n                              <select class=\"wide w-100\" id=\"country\" name=\"country\" [(ngModel)]=\"billingAddress.country\">\n            <option value=\"Choose...\" data-display=\"Select\">Choose...</option>\n            <option value=\"United States\">United States</option>\n          </select>\n                              <div class=\"invalid-feedback\"> Please select a valid country. </div>\n                          </div>\n                          <div class=\"col-md-4 mb-3\">\n                              <label for=\"state\">State </label>\n                              <select class=\"wide w-100\" id=\"state\" name=\"state\" [(ngModel)]=\"billingAddress.state\">\n            <option data-display=\"Select\">Choose...</option>\n            <option>California</option>\n          </select>\n                              <div class=\"invalid-feedback\"> Please provide a valid state. </div>\n                          </div>\n                          <div class=\"col-md-3 mb-3\">\n                              <label for=\"zip\">Zip </label>\n                              <input type=\"text\" class=\"form-control\" name=\"zip\" id=\"zip\" [(ngModel)]=\"billingAddress.zip\" placeholder=\"\" required>\n                              <div class=\"invalid-feedback\"> Zip code required. </div>\n                          </div>\n                      </div>\n                      <hr class=\"mb-4\">\n                      <div class=\"custom-control custom-checkbox\">\n                          <input type=\"checkbox\" class=\"custom-control-input\" id=\"same-address\">\n                          <label class=\"custom-control-label\" for=\"same-address\">Shipping address is the same as my billing address</label>\n                      </div>\n                      <div class=\"custom-control custom-checkbox\">\n                          <input type=\"checkbox\" class=\"custom-control-input\" id=\"save-info\">\n                          <label class=\"custom-control-label\" for=\"save-info\">Save this information for next time</label>\n                      </div>\n                      <hr class=\"mb-4\">\n                      <div class=\"title\"> <span>Payment</span> </div>\n                      <div class=\"d-block my-3\">\n                          <div class=\"custom-control custom-radio\">\n                              <input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked required>\n                              <label class=\"custom-control-label\" for=\"credit\">Credit card</label>\n                          </div>\n                          <div class=\"custom-control custom-radio\">\n                              <input id=\"debit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\n                              <label class=\"custom-control-label\" for=\"debit\">Debit card</label>\n                          </div>\n                          <div class=\"custom-control custom-radio\">\n                              <input id=\"paypal\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\n                              <label class=\"custom-control-label\" for=\"paypal\">Paypal</label>\n                          </div>\n                      </div>\n                      <div class=\"row\">\n                          <div class=\"col-md-6 mb-3\">\n                              <label for=\"cc-name\">Name on card</label>\n                              <input type=\"text\" class=\"form-control\" id=\"cc-name\" placeholder=\"\" required> <small class=\"text-muted\">Full name as displayed on card</small>\n                              <div class=\"invalid-feedback\"> Name on card is required </div>\n                          </div>\n                          <div class=\"col-md-6 mb-3\">\n                              <label for=\"cc-number\">Credit card number</label>\n                              <input type=\"text\" class=\"form-control\" id=\"cc-number\" placeholder=\"\" required>\n                              <div class=\"invalid-feedback\"> Credit card number is required </div>\n                          </div>\n                      </div>\n                      <div class=\"row\">\n                          <div class=\"col-md-3 mb-3\">\n                              <label for=\"cc-expiration\">Expiration</label>\n                              <input type=\"text\" class=\"form-control\" id=\"cc-expiration\" placeholder=\"\" required>\n                              <div class=\"invalid-feedback\"> Expiration date required </div>\n                          </div>\n                          <div class=\"col-md-3 mb-3\">\n                              <label for=\"cc-expiration\">CVV</label>\n                              <input type=\"text\" class=\"form-control\" id=\"cc-cvv\" placeholder=\"\" required>\n                              <div class=\"invalid-feedback\"> Security code required </div>\n                          </div>\n                \n                      </div>\n                      <hr class=\"mb-1\"> </form>\n              </div>\n          </div>\n          <div class=\"col-sm-6 col-lg-6 mb-3\">\n              <div class=\"row\">\n                  <div class=\"col-md-12 col-lg-12\">\n                      <div class=\"shipping-method-box\">\n                          <div class=\"title-left\">\n                              <h3>Shipping Method</h3>\n                          </div>\n                          <div class=\"mb-4\">\n                              <div class=\"custom-control custom-radio\">\n                                  <input id=\"shippingOption1\" name=\"shipping-option\" class=\"custom-control-input\" checked=\"checked\" type=\"radio\">\n                                  <label class=\"custom-control-label\" for=\"shippingOption1\">Standard Delivery</label> <span class=\"float-right font-weight-bold\">FREE</span> </div>\n                              <div class=\"ml-4 mb-2 small\">(3-7 business days)</div>\n                              <div class=\"custom-control custom-radio\">\n                                  <input id=\"shippingOption2\" name=\"shipping-option\" class=\"custom-control-input\" type=\"radio\">\n                                  <label class=\"custom-control-label\" for=\"shippingOption2\">Express Delivery</label> <span class=\"float-right font-weight-bold\">$10.00</span> </div>\n                              <div class=\"ml-4 mb-2 small\">(2-4 business days)</div>\n                              <div class=\"custom-control custom-radio\">\n                                  <input id=\"shippingOption3\" name=\"shipping-option\" class=\"custom-control-input\" type=\"radio\">\n                                  <label class=\"custom-control-label\" for=\"shippingOption3\">Next Business day</label> <span class=\"float-right font-weight-bold\">$20.00</span> </div>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-12 col-lg-12\">\n                      <div class=\"odr-box\">\n                          <div class=\"title-left\">\n                              <h3>Shopping cart</h3>\n                          </div>\n                          <div class=\"rounded p-2 bg-light\">\n                              <div class=\"media mb-2 border-bottom\" *ngFor=\"let item of cartitems\">\n                                  <div class=\"media-body\"> <a href=\"\"> {{item.product.name}}</a>\n                                      <div class=\"small text-muted\">$ {{item.product.price}} <span class=\"mx-2\">|</span> Qty: {{item.quantity}} <span class=\"mx-2\">|</span> Subtotal: ${{item.total}}</div>\n                                  </div>\n                              </div>\n                             \n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-12 col-lg-12\">\n                      <div class=\"order-box\">\n                          <div class=\"title-left\">\n                              <h3>Your order</h3>\n                          </div>\n                          <div class=\"d-flex\">\n                              <div class=\"font-weight-bold\">Product</div>\n                              <div class=\"ml-auto font-weight-bold\">Total</div>\n                          </div>\n                          <hr class=\"my-1\">\n                          <div class=\"d-flex\">\n                              <h6>Sub Total</h6>\n                              <div class=\"ml-auto font-weight-bold\"> $ {{cartservice.totalSum}} </div>\n                          </div>\n                          <div class=\"d-flex\">\n                              <h6>Discount</h6>\n                              <div class=\"ml-auto font-weight-bold\"> $ 0 </div>\n                          </div>\n                          <hr class=\"my-1\">\n                          <div class=\"d-flex\">\n                              <h6>Coupon Discount</h6>\n                              <div class=\"ml-auto font-weight-bold\"> $ 0 </div>\n                          </div>\n                          <div class=\"d-flex\">\n                              <h6>Tax</h6>\n                              <div class=\"ml-auto font-weight-bold\"> $ 0 </div>\n                          </div>\n                          <div class=\"d-flex\">\n                              <h6>Shipping Cost</h6>\n                              <div class=\"ml-auto font-weight-bold\"> Free </div>\n                          </div>\n                          <hr>\n                          <div class=\"d-flex gr-total\">\n                              <h6>Grand Total</h6>\n                              <div class=\"ml-auto h5\"> $ {{cartservice.totalSum}} </div>\n                          </div>\n                          <hr> </div>\n                  </div>\n                  <!-- <div class=\"col-12 d-flex shopping-box\"> <a href=\"checkout.html\" class=\"ml-auto btn hvr-hover\">Place Order</a> </div> -->\n                  <div *ngIf=\"!billingForm.valid\" class=\"col-12 d-flex shopping-box \"><button   class=\"ml-auto btn hvr-hover btn btn-success\" (click)= \"PlaceOrder()\">Place Order</button> </div>\n              </div>\n          </div>\n      </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/billing/billing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/billing/billing.component.ts ***!
  \**********************************************/
/*! exports provided: BillingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingComponent", function() { return BillingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/cart.service */ "./src/app/_services/cart.service.ts");
/* harmony import */ var _services_billing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/billing.service */ "./src/app/_services/billing.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");







var BillingComponent = /** @class */ (function () {
    function BillingComponent(cartservice, billingservice, router, alertify, auth) {
        this.cartservice = cartservice;
        this.billingservice = billingservice;
        this.router = router;
        this.alertify = alertify;
        this.auth = auth;
        this.products = [];
        this.cartitems = [];
    }
    BillingComponent.prototype.ngOnInit = function () {
        this.cartitems = this.cartservice.cartitems;
        this.billingAddress = {
            id: 0,
            firstname: '',
            lastname: '',
            emailAddress: '',
            address: '',
            address2: '',
            country: '',
            state: '',
            zip: ''
        };
        this.orderbillingItem = {
            id: 0,
            cartId: 0,
            totalAmount: 0,
            date: '',
            billingAddress: this.billingAddress,
            cartitems: []
        };
    };
    BillingComponent.prototype.PlaceOrder = function () {
        var _this = this;
        if (this.billingAddress.address !== '') {
            this.orderbillingItem.billingAddress = this.billingAddress;
            this.orderbillingItem.cartitems.push(this.cartitems);
            this.orderbillingItem.totalAmount = this.cartservice.totalSum;
            this.orderbillingItem.cartId = this.cartitems[0].cartId;
            console.log(this.orderbillingItem);
            // this.billingservice.SaveOrder(this.order);
            this.billingservice.SaveOrder(this.orderbillingItem).subscribe(function (order) {
                _this.orderbillingItem = order;
                _this.alertify.success('Order Placed successfully');
                _this.router.navigate(['/gallery']);
            });
        }
        else {
            this.alertify.error('Billing Details  required');
        }
    };
    BillingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-billing',
            template: __webpack_require__(/*! ./billing.component.html */ "./src/app/billing/billing.component.html"),
            styles: [__webpack_require__(/*! ./billing.component.css */ "./src/app/billing/billing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"], _services_billing_service__WEBPACK_IMPORTED_MODULE_4__["BillingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], BillingComponent);
    return BillingComponent;
}());



/***/ }),

/***/ "./src/app/cartlist/cartlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/cartlist/cartlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnRsaXN0L2NhcnRsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/cartlist/cartlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/cartlist/cartlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div   class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <div class=\"table-main table-responsive\">\n              <table class=\"table\">\n                  <thead>\n                      <tr>\n                          <!-- <th>Images</th > -->\n                          <th>Product Name</th>\n                          <th>Price</th>\n                          <th>Quantity</th>\n                          <th>Total</th>\n                          <th>Remove</th>\n                      </tr>\n                  </thead>\n                  <tbody>\n                      <tr *ngFor=\"let item of cartitems\">\n                          <!-- <td class=\"thumbnail-img\">\n                              <a href=\"#\">\n        <img class=\"img-fluid\" src=\"{{item.product.photoUrl}}\" alt=\"\" />\n      </a>\n                          </td> -->\n                          <td class=\"name-pr\">\n                              <a href=\"#\">\n                                {{item.product.name}}\n      </a>\n                          </td>\n                          <td class=\"price-pr\">\n                              <p>$ {{item.product.price}}</p>\n                          </td>\n                          <td class=\"quantity-box\"><input type=\"number\" size=\"4\" value=\"1\" min=\"0\" \n                            step=\"1\" class=\"c-input-text qty text\" (click) =\"increaseQuantity(item)\" [(ngModel)]=\"item.quantity\"></td>\n                          <td class=\"total-pr\">\n                              <p>$ {{item.total}}</p>\n                          </td>\n                          <td class=\"remove-pr\">\n                             \n        <i class=\"fa fa-times\" (click)= \"removeProduct(item.product)\"></i>\n     \n                          </td>\n                      </tr>\n                     \n                  </tbody>\n              </table>\n          </div>\n      </div>\n  </div>\n\n \n\n  <div  class=\"row my-5\">\n      <div class=\"col-lg-8 col-sm-12\"></div>\n      <div class=\"col-lg-4 col-sm-12\">\n          <div *ngIf=\"validcart\" class=\"order-box\">\n              <h5>Order summary</h5>\n              <div class=\"d-flex\">\n                  <h6>Sub Total</h6>\n                  <div class=\"ml-auto font-weight-bold\"> $ {{totalSum}} </div>\n              </div>\n              <div class=\"d-flex\">\n                  <h6>Discount</h6>\n                  <div class=\"ml-auto font-weight-bold\"> $ 0 </div>\n              </div>\n              <hr class=\"my-1\">\n              <div class=\"d-flex\">\n                  <h6>Coupon Discount</h6>\n                  <div class=\"ml-auto font-weight-bold\"> $ 0 </div>\n              </div>\n              <div class=\"d-flex\">\n                  <h6>Tax</h6>\n                  <div class=\"ml-auto font-weight-bold\"> $ 0 </div>\n              </div>\n              <div class=\"d-flex\">\n                  <h6>Shipping Cost</h6>\n                  <div class=\"ml-auto font-weight-bold\"> Free </div>\n              </div>\n              <hr>\n              <div class=\"d-flex gr-total\">\n                  <h5>Grand Total</h5>\n                  <div class=\"ml-auto h5\"> $ {{totalSum}} </div>\n              </div>\n              <hr> </div>\n      </div>\n      <div *ngIf=\"validcart\" class=\"col-12 d-flex shopping-box \"><button   class=\"ml-auto btn hvr-hover btn btn-success\" (click)= \"checkOut()\">Checkout</button> </div>\n\n     \n  </div>\n\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/cartlist/cartlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/cartlist/cartlist.component.ts ***!
  \************************************************/
/*! exports provided: CartlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartlistComponent", function() { return CartlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/cart.service */ "./src/app/_services/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CartlistComponent = /** @class */ (function () {
    function CartlistComponent(cartservice, router) {
        this.cartservice = cartservice;
        this.router = router;
        this.products = [];
        this.cartitems = [];
        this.totalSum = 0;
        this.totalProductSum = 0;
        this.validcart = false;
    }
    CartlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartservice.getCartItems().subscribe(function (products) {
            _this.cartservice.cartCount = 0;
            _this.cartitems = products;
            console.log(_this.cartitems);
            _this.cartservice.cartCount = _this.cartitems.length;
            _this.refreshTotal();
            if (_this.cartitems.values != null) {
                _this.validcart = true;
            }
            else {
                _this.validcart = false;
            }
        });
        this.refreshTotal();
    };
    CartlistComponent.prototype.ReFreshCartItems = function () {
        var _this = this;
        this.cartservice.getCartItems().subscribe(function (products) {
            console.log(products);
            _this.cartitems = products;
            _this.cartservice.cartCount = _this.cartitems.length;
            _this.refreshTotal();
            console.log(_this.cartitems.length);
            if (_this.cartitems.values != null) {
                _this.validcart = true;
            }
            else {
                _this.validcart = false;
            }
        });
    };
    CartlistComponent.prototype.increaseQuantity = function (item) {
        item.total = item.product.price * item.quantity;
        this.refreshTotal();
    };
    CartlistComponent.prototype.removeProduct = function (product) {
        var _this = this;
        this.cartservice.RemoveCartItem(product).subscribe(function (products) {
            if (_this.cartitems[0] != null) {
                var index = _this.cartitems.indexOf(product.productId, 0);
                _this.cartitems.splice(index, 1);
                _this.cartitems = products;
                //    this.cartservice.cartCount = this.cartitems.length;
                _this.ReFreshCartItems();
            }
        });
        // const index = this.products.indexOf(product.productId , 0);
        // this.products.splice(index, 1);
        this.cartservice.RefreshCartCount(this.cartitems);
        // this.ReFreshCartItems();
        //  this.refreshTotal();
    };
    CartlistComponent.prototype.refreshTotal = function () {
        this.totalSum = 0;
        this.sumCart(this.cartitems);
        if (this.totalSum > 0) {
            this.validcart = true;
        }
        else {
            this.validcart = false;
        }
    };
    CartlistComponent.prototype.sumCart = function (data) {
        for (var i = 0; i < data.length; i++) {
            this.totalSum += data[i].product.price * data[i].quantity;
        }
    };
    CartlistComponent.prototype.checkOut = function () {
        if (this.totalSum > 0) {
            this.cartservice.totalSum = this.totalSum;
            this.cartservice.cartitems = this.cartitems;
            this.router.navigate(['/billing']);
        }
    };
    CartlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cartlist',
            template: __webpack_require__(/*! ./cartlist.component.html */ "./src/app/cartlist/cartlist.component.html"),
            styles: [__webpack_require__(/*! ./cartlist.component.css */ "./src/app/cartlist/cartlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CartlistComponent);
    return CartlistComponent;
}());



/***/ }),

/***/ "./src/app/carts/carts.component.css":
/*!*******************************************!*\
  !*** ./src/app/carts/carts.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnRzL2NhcnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/carts/carts.component.html":
/*!********************************************!*\
  !*** ./src/app/carts/carts.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div   class=\"container mt-5\" >\n    <fieldset>\n        <legend><h5><b>All Carts</b></h5></legend>\n     \n        <div class=\"table-main table-responsive\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th>Username</th >\n                        <th>Detail</th >\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let cart of carts\">\n                       \n                        <td class=\"name-pr\">\n                            \n                              {{cart.username}}\n    \n                        </td>\n    \n                        <td class=\"remove-pr\">\n                     \n                            <i class=\"fa fa-edit\" (click)= \"ViewCart(cart)\"></i>\n                         \n                            </td>\n                        \n                    \n                    </tr>\n                   \n                </tbody>\n            </table>\n        </div>\n        </fieldset>\n    \n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/carts/carts.component.ts":
/*!******************************************!*\
  !*** ./src/app/carts/carts.component.ts ***!
  \******************************************/
/*! exports provided: CartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartsComponent", function() { return CartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_billing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/billing.service */ "./src/app/_services/billing.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/cart.service */ "./src/app/_services/cart.service.ts");




var CartsComponent = /** @class */ (function () {
    function CartsComponent(billingservice, cartService) {
        this.billingservice = billingservice;
        this.cartService = cartService;
        this.ViewOrderdetail = false;
    }
    CartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.GetCheckedOutCartItems(true).subscribe(function (products) {
            _this.CheckedOutProducts = products;
        });
        this.cartService.GetCheckedOutCartItems(false).subscribe(function (products) {
            _this.UnCheckedOutProducts = products;
        });
        this.cartService.getCarts().subscribe(function (carts) {
            _this.carts = carts;
        });
    };
    CartsComponent.prototype.ViewCart = function (cart) {
    };
    CartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carts',
            template: __webpack_require__(/*! ./carts.component.html */ "./src/app/carts/carts.component.html"),
            styles: [__webpack_require__(/*! ./carts.component.css */ "./src/app/carts/carts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_billing_service__WEBPACK_IMPORTED_MODULE_2__["BillingService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
    ], CartsComponent);
    return CartsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div   class=\"container mt-5\">\n  <div class=\"col-lg-12\">\n  <div class=\"title-left\">\n    <h6>Dashboard</h6>\n  </div>\n  \n    <div class=\"row\">\n      <a class=\"nav-link\" ><i class=\"fa fa-shopping-bag\"> All Carts<span class=\"badge\">{{carts?.length}}</span></i></a>\n    </div>\n\n    <div class=\"row\">\n\n      <div class=\"col-lg-6\">\n        <div class=\"odr-box\">\n          <div class=\"title-left\">\n            <h6>Checked Out Products</h6>\n          </div>\n          <div class=\"rounded p-2 bg-light\">\n              <div class=\"media mb-2 border-bottom\" *ngFor=\"let item of ItemscheckoutedOut\">\n                  <div class=\"media-body\"> <a href=\"\"> {{item.product?.name}}</a>\n                      <div class=\"small text-muted\">$ {{item.product?.price}} <span class=\"mx-2\">|</span> Qty: {{item.quantity}} <span class=\"mx-2\">|</span> Total: ${{item.total}}</div>\n                      <div class=\"progress\">\n                        <div class=\"progress-bar  bg-success\" role=\"progressbar\"  style=\"width: 25%;\"\n                        aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{item.quantity}} %</div>\n                      </div>\n                  </div>\n                  \n              </div>\n             \n          </div>\n      </div>\n      </div>\n      <div class=\"col-lg-6\">\n        <div class=\"odr-box\">\n          <div class=\"title-left\">\n            <h6>Products Not CheckedOut</h6>\n          </div>\n          <div class=\"rounded p-2 bg-light\">\n              <div class=\"media mb-2 border-bottom\" *ngFor=\"let value of ItemsNotcheckoutedOut\">\n                  <div class=\"media-body\"> <a href=\"\"> {{value.product?.name}}</a>\n                      <div class=\"small text-muted\">$ {{value.product?.price}} <span class=\"mx-2\">|</span> Qty: {{value.quantity}} <span class=\"mx-2\">|</span> Total: ${{item.total}}</div>\n                      <div class=\"progress\">\n                        <div class=\"progress-bar  bg-primary\" role=\"progressbar\"  style=\"width: 75%;\"\n                        aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{value.quantity}} %</div>\n                      </div>\n                  </div>\n                  \n              </div>\n             \n          </div>\n      </div>\n      </div>\n\n    </div>\n    <div class=\"row\">\n\n    </div>\n   \n  </div>\n</div>\n<!-- <div class=\"progress\">\n  <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\"\n  aria-valuenow=\"25\" aria-valuemin=\"25\" aria-valuemax=\"100\"></div>\n</div>\n\n<div class=\"progress\">\n  <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\"\n  aria-valuenow=\"50\" aria-valuemin=\"50\" aria-valuemax=\"100\"></div>\n</div>\n\n<div class=\"progress\">\n  <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\"\n  aria-valuenow=\"75\" aria-valuemin=\"75\" aria-valuemax=\"100\"></div>\n</div>\n\n<div class=\"progress\">\n  <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\"\n  aria-valuenow=\"100\" aria-valuemin=\"100\" aria-valuemax=\"100\"></div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/cart.service */ "./src/app/_services/cart.service.ts");
/* harmony import */ var _services_billing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/billing.service */ "./src/app/_services/billing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(cartservice, billingservice, router, alertify, auth) {
        this.cartservice = cartservice;
        this.billingservice = billingservice;
        this.router = router;
        this.alertify = alertify;
        this.auth = auth;
        this.products = [];
        this.cartitems = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartservice.getCarts().subscribe(function (carts) { _this.carts = carts; });
        this.cartservice.GetCheckedOutCartItems(true).subscribe(function (CartItems) {
            _this.ItemscheckoutedOut = CartItems;
        });
        this.cartservice.GetCheckedOutCartItems(false).subscribe(function (CartItems) { _this.ItemsNotcheckoutedOut = CartItems; });
        this.cartitems = this.cartservice.cartitems;
        this.billingAddress = {
            id: 0,
            firstname: '',
            lastname: '',
            emailAddress: '',
            address: '',
            address2: '',
            country: '',
            state: '',
            zip: ''
        };
        this.orderbillingItem = {
            id: 0,
            cartId: 0,
            totalAmount: 0,
            date: '',
            billingAddress: this.billingAddress,
            cartitems: []
        };
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"], _services_billing_service__WEBPACK_IMPORTED_MODULE_3__["BillingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n   \n  \n\n\n\n\n<div class=\"container mt-5\">\n<div class=\"row\">\n<div *ngFor=\"let product of products\" class=\"col-lg-2 col-md-3 col-sm-6\">\n  <app-productcard [product]=\"product\" (AddProductToCart)=\"AddNewProductToCart($event)\"></app-productcard>\n</div>\n</div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/product.service */ "./src/app/_services/product.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/cart.service */ "./src/app/_services/cart.service.ts");






var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(auth, alertify, cartservice, productservice) {
        this.auth = auth;
        this.alertify = alertify;
        this.cartservice = cartservice;
        this.productservice = productservice;
        this.registerMode = false;
        this.signinMode = false;
        this.regDiv = true;
        this.AddProductToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    }
    GalleryComponent.prototype.ngOnInit = function () {
        this.loadProducts();
        // if (this.auth.loggedIn) {this.registerMode = false; }
    };
    GalleryComponent.prototype.registerToggle = function () {
        this.registerMode = true;
    };
    GalleryComponent.prototype.signinToggle = function () {
        this.signinMode = true;
    };
    GalleryComponent.prototype.CancelRegistration = function () {
        this.registerMode = false;
    };
    GalleryComponent.prototype.AddNewProductToCart = function (product) {
        var _this = this;
        this.cartservice.AddProductToCart(product);
        this.product = product;
        console.log(this.product);
        //  this.AddProductToCart.emit(this.product);
        this.cartservice.addCartItem().subscribe(function (carts) { });
        this.cartservice.getCartItems().subscribe(function (products) {
            console.log(products);
            _this.cartservice.cartCount = products.length;
            // this.products = products;
            // this.cartservice.cartCount = this.products.length;
        });
    };
    // AddNewProductToCart(product) {
    //   this.cartservice.AddProductToCart(product);
    //   this.product = product;
    //   this.AddProductToCart.emit(this.product);
    //   this.cartservice.addCartItem().subscribe((carts: any) => {});
    // }
    GalleryComponent.prototype.CancelSignInMode = function () {
        this.signinMode = false;
    };
    GalleryComponent.prototype.loadProducts = function () {
        var _this = this;
        this.productservice.getProducts().subscribe(function (products) {
            _this.products = products;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GalleryComponent.prototype, "AddProductToCart", void 0);
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"], _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n\n  <div *ngIf=\"auth.RegisterSignInDiv\"  style=\"text-align: center\" >\n   \n        <div *ngIf=\"!registerMode\"  style=\"text-align: center\">\n           \n            <p class=\"lead\"></p>\n            <div class=\"text-center\">\n              <button class=\"btn btn-primary btn-lg mr-2\" (click)=\"registerToggle()\">Register</button>\n              <button class=\"btn btn-info btn-lg\" (click)=\"signinToggle()\">Sign In </button>\n            </div>\n          </div>\n        \n          <div *ngIf=\"registerMode\" class=\"container\">\n            <div class=\"row justify-content-center\">\n              <div class=\"col-4\">\n               <app-register (CancelRegisterMode)=\"CancelRegistration($event)\"></app-register>\n              </div>\n            </div>\n          </div>\n\n \n\n      <div *ngIf=\"signinMode\" class=\"container\">\n          <div class=\"row justify-content-center\">\n            <div class=\"col-4\">\n            <app-signin (CancelSignInMode)=\"CancelSignInMode($event)\"></app-signin>\n            </div>\n          </div>\n        </div>  \n      </div>\n\n\n    </div>\n\n\n<div class=\"container mt-5\">\n    <div class=\"row\">\n      <div *ngFor=\"let product of products\" class=\"col-lg-2 col-md-3 col-sm-6\">\n        <app-productcard [product]=\"product\" (AddProductToCart)=\"AddNewProductToCart($event)\"></app-productcard>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_services/cart.service */ "./src/app/_services/cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/product.service */ "./src/app/_services/product.service.ts");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth, alertify, cartservice, productservice) {
        this.auth = auth;
        this.alertify = alertify;
        this.cartservice = cartservice;
        this.productservice = productservice;
        this.registerMode = false;
        this.signinMode = false;
        this.regDiv = true;
        this.cartitems = [];
        this.RegisterSignInHomeDiv = true;
        this.AddProductToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadProducts();
    };
    HomeComponent.prototype.registerToggle = function () {
        this.registerMode = true;
    };
    HomeComponent.prototype.signinToggle = function () {
        this.signinMode = true;
    };
    HomeComponent.prototype.CancelRegistration = function () {
        this.registerMode = false;
    };
    HomeComponent.prototype.AddNewProductToCart = function (product) {
        var _this = this;
        this.cartservice.AddProductToCart(product);
        this.product = product;
        console.log(this.product);
        //  this.AddProductToCart.emit(this.product);
        this.cartservice.addCartItem().subscribe(function (carts) { });
        this.cartservice.getCartItems().subscribe(function (products) {
            console.log(products);
            _this.cartservice.cartCount = products.length;
            // this.products = products;
            // this.cartservice.cartCount = this.products.length;
        });
    };
    HomeComponent.prototype.CancelSignInMode = function () {
        this.signinMode = false;
    };
    HomeComponent.prototype.loadProducts = function () {
        var _this = this;
        // alert(this.auth.RegisterSignInDiv);
        // this.products = this.productservice.products;
        // this.products = this.productservice.getProducts();
        this.productservice.getProducts().subscribe(function (products) {
            _this.products = products;
        });
        if (this.auth.loggedIn()) {
            this.auth.RegisterSignInDiv = false;
            this.cartservice.getCartItems().subscribe(function (products) {
                _this.cartservice.cartCount = products.length;
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HomeComponent.prototype, "AddProductToCart", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"], _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/myorders/myorders.component.css":
/*!*************************************************!*\
  !*** ./src/app/myorders/myorders.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215b3JkZXJzL215b3JkZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/myorders/myorders.component.html":
/*!**************************************************!*\
  !*** ./src/app/myorders/myorders.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div   class=\"container mt-5\" *ngIf=\"ViewOrderdetail\">\n  <div class=\"row\" >      \n    <div class=\"col-lg-12\">\n      <fieldset>\n        <legend><h5><b>My Orders</b></h5></legend>\n        <div class=\"table-main table-responsive\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th>Date</th >\n                        <th>Amount</th>                          \n                        <th>View</th>\n                       \n                        \n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let order of orders\">\n                        \n                        <td class=\"name-pr\">\n                            \n                              {{order.orderDate}}\n    \n                        </td>\n  \n                        <td class=\"total-pr\">\n                          <p> $ {{order.amount}}</p>\n                      </td>\n                      <td class=\"remove-pr\">\n                             \n                        <i class=\"fa fa-edit\" (click)= \"ViewOrder(order)\"></i>\n                     \n                        </td>\n                        \n                        \n                      \n                    </tr>\n                   \n                </tbody>\n            </table>\n        </div>\n    \n    \n    \n      </fieldset>\n            </div>\n  </div>\n  </div>\n\n\n\n\n<div   class=\"container mt-5\" *ngIf=\"!ViewOrderdetail\">\n<div class=\"row\" >      \n  <div class=\"col-lg-12\">\n    <fieldset>\n      <legend><h5><b>My Orders</b></h5></legend>\n      <div class=\"table-main table-responsive\">\n          <table class=\"table\">\n              <thead>\n                  <tr>\n                      <th>Images</th >\n                      <th>Product Name</th>                          \n                      <th>Description</th>\n                      <th>Price</th>\n                      \n                  </tr>\n              </thead>\n              <tbody>\n                  <tr *ngFor=\"let product of products\">\n                      <td class=\"thumbnail-img\">\n                          <a href=\"#\">\n    <img class=\"img-fluid\" src=\"{{product.product.photoUrl}}\" alt=\"\" />\n  </a>\n                      </td>\n                      <td class=\"name-pr\">\n                          \n                            {{product.product.name}}\n  \n                      </td>\n\n                      <td class=\"total-pr\">\n                        <p> {{product.product.description}}</p>\n                    </td>\n                      <td class=\"price-pr\">\n                          <p>$ {{product.product.price}}</p>\n                      </td>\n                      \n                      \n                    \n                  </tr>\n                 \n              </tbody>\n          </table>\n      </div>\n  \n  \n  \n    </fieldset>\n          </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/myorders/myorders.component.ts":
/*!************************************************!*\
  !*** ./src/app/myorders/myorders.component.ts ***!
  \************************************************/
/*! exports provided: MyordersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyordersComponent", function() { return MyordersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_billing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/billing.service */ "./src/app/_services/billing.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/cart.service */ "./src/app/_services/cart.service.ts");




var MyordersComponent = /** @class */ (function () {
    function MyordersComponent(billingservice, cartservice) {
        this.billingservice = billingservice;
        this.cartservice = cartservice;
        this.ViewOrderdetail = true;
    }
    MyordersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.billingservice.GetMyOrders().subscribe(function (orders) {
            _this.orders = orders;
        });
    };
    MyordersComponent.prototype.ViewOrder = function (order) {
        var _this = this;
        console.log(order);
        this.cartservice.getMyOrderCartItems(order.cartId).subscribe(function (products) {
            _this.products = products;
        });
        this.ViewOrderdetail = false;
    };
    MyordersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myorders',
            template: __webpack_require__(/*! ./myorders.component.html */ "./src/app/myorders/myorders.component.html"),
            styles: [__webpack_require__(/*! ./myorders.component.css */ "./src/app/myorders/myorders.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_billing_service__WEBPACK_IMPORTED_MODULE_2__["BillingService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
    ], MyordersComponent);
    return MyordersComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n\n\n  <div class=\"container\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/home']\" >Fruit & Veg Shop</a>\n\n      \n    <ul *ngIf=\"loggedIn()\" class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"['/home']\">Gallery</a>\n      </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['/myorders']\">MyOrders</a>\n        </li>\n          <li *ngIf=\"isAdmin()\" class=\"nav-item\" routerLinkActive=\"active\">\n              <a class=\"nav-link\" [routerLink]=\"['/products']\">Products</a>\n            </li>\n\n            <li *ngIf=\"isAdmin()\"class=\"nav-item\" routerLinkActive=\"active\">\n              <a class=\"nav-link\" [routerLink]=\"['/orders']\">Orders</a>\n            </li>\n            <li *ngIf=\"isAdmin()\" class=\"nav-item\" routerLinkActive=\"active\">\n              <a class=\"nav-link\" [routerLink]=\"['/carts']\">Carts</a>\n            </li>   \n            <li *ngIf=\"isAdmin()\" class=\"nav-item\" routerLinkActive=\"active\">\n              <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">DashBoard</a>\n            </li>   \n           \n      \n           \n       \n      </ul>\n      <ul *ngIf=\"loggedIn()\" class=\"navbar-nav mr-auto\">\n        <li *ngIf=\"isAdmin()\" class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" [routerLink]=\"['/cartlist']\"><i class=\"fa fa-shopping-bag\">  My Cart<span class=\"badge\">{{cartservice.cartCount}}</span></i></a>\n         </li>\n     </ul>\n\n      <div *ngIf=\"loggedIn()\" class=\"dropdown\" dropdown>\n        <a class=\" dropdown-toggle text-light\" dropdownToggle>\n         Welcome {{auth.decodedToken?.unique_name | titlecase}}\n        </a>\n      \n        <div class=\"dropdown-menu mt-3\" *dropdownMenu>\n          <a class=\"dropdown-item\" [routerLink]=\"['/userslist/edit']\" ><i class=\"fa fa-user\"></i>Edit Profile</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" (click)= \"logOut()\"><i class=\"fa fa-sign-out\"></i>Logout</a>\n          \n        </div>\n        \n\n\n        \n      </div>\n\n\n      \n\n\n  \n      <form *ngIf=\"!loggedIn()\" #loginForm=\"ngForm\" class=\"form-inline my-2 my-lg-0\" (ngSubmit) = \"login()\" >\n        <input class=\"form-control mr-sm-2\" placeholder=\"Username\" name=\"username\" type=\"text\" required [(ngModel)]=\"model.username\">\n        <input class=\"form-control mr-sm-2\" placeholder=\"Password\" name=\"password\"  type=\"password\" required [(ngModel)]=\"model.password\">\n        <button [disabled]=\"!loginForm.valid\" class=\"btn btn-success my-2 my-sm-0\" type=\"login\">Login</button>\n      </form>\n\n      \n           \n  </div>\n  \n  \n</nav>\n "

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/cart.service */ "./src/app/_services/cart.service.ts");






var NavComponent = /** @class */ (function () {
    function NavComponent(auth, alertify, router, cartservice) {
        this.auth = auth;
        this.alertify = alertify;
        this.router = router;
        this.cartservice = cartservice;
        this.model = {};
    }
    NavComponent.prototype.ngOnInit = function () { };
    NavComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.model).subscribe(function (next) {
            _this.alertify.success('successfully logged in');
        }, function (error) {
            _this.alertify.error('failed to log in');
        }, function () { _this.router.navigate(['/home']); });
    };
    NavComponent.prototype.loggedIn = function () {
        return this.auth.loggedIn();
        // const token = localStorage.getItem('token');
        // return !!token;
    };
    NavComponent.prototype.isAdmin = function () {
        // console.log(this.auth.decodedToken);
        return this.auth.decodedToken.role === 'admin';
    };
    NavComponent.prototype.logOut = function () {
        this.auth.RegisterSignInDiv = true;
        localStorage.removeItem('token');
        this.alertify.message('logged out');
        this.router.navigate(['/home']);
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/orders/orders.component.css":
/*!*********************************************!*\
  !*** ./src/app/orders/orders.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/orders/orders.component.html":
/*!**********************************************!*\
  !*** ./src/app/orders/orders.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div   class=\"container mt-5\" *ngIf=\"ViewOrderdetail\">\n  <div class=\"row\" >      \n    <div class=\"col-lg-12\">\n      <fieldset>\n        <legend><h5><b>All Orders</b></h5></legend>\n        <div class=\"table-main table-responsive\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th>Date</th >\n                        <th>Amount</th>                          \n                        <th>View</th>\n                       \n                        \n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let order of orders\">\n                        \n                        <td class=\"name-pr\">\n                            \n                              {{order.orderDate}}\n    \n                        </td>\n  \n                        <td class=\"total-pr\">\n                          <p> $ {{order.amount}}</p>\n                      </td>\n                      <td class=\"remove-pr\">\n                             \n                        <i class=\"fa fa-edit\" (click)= \"ViewOrder(order)\"></i>\n                     \n                        </td>\n                        \n                        \n                      \n                    </tr>\n                   \n                </tbody>\n            </table>\n        </div>\n    \n    \n    \n      </fieldset>\n            </div>\n  </div>\n  </div>\n\n\n\n\n<div   class=\"container mt-5\" *ngIf=\"!ViewOrderdetail\">\n<div class=\"row\" >      \n  <div class=\"col-lg-12\">\n    <fieldset>\n      <legend><h5><b>All Orders</b></h5></legend>\n      <div class=\"table-main table-responsive\">\n          <table class=\"table\">\n              <thead>\n                  <tr>\n                      <th>Images</th >\n                      <th>Product Name</th>                          \n                      <th>Description</th>\n                      <th>Price</th>\n                      \n                  </tr>\n              </thead>\n              <tbody>\n                  <tr *ngFor=\"let product of products\">\n                      <td class=\"thumbnail-img\">\n                          <a href=\"#\">\n    <img class=\"img-fluid\" src=\"{{product.product.photoUrl}}\" alt=\"\" />\n  </a>\n                      </td>\n                      <td class=\"name-pr\">\n                          \n                            {{product.product.name}}\n  \n                      </td>\n\n                      <td class=\"total-pr\">\n                        <p> {{product.product.description}}</p>\n                    </td>\n                      <td class=\"price-pr\">\n                          <p>$ {{product.product.price}}</p>\n                      </td>\n                      \n                      \n                    \n                  </tr>\n                 \n              </tbody>\n          </table>\n      </div>\n  \n  \n  \n    </fieldset>\n          </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_billing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/billing.service */ "./src/app/_services/billing.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/cart.service */ "./src/app/_services/cart.service.ts");




var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(billingservice, cartservice) {
        this.billingservice = billingservice;
        this.cartservice = cartservice;
        this.ViewOrderdetail = true;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.billingservice.GetOrders().subscribe(function (orders) {
            _this.orders = orders;
        });
    };
    OrdersComponent.prototype.ViewOrder = function (order) {
        var _this = this;
        console.log(order);
        this.cartservice.getMyOrderCartItems(order.cartId).subscribe(function (products) {
            _this.products = products;
        });
        this.ViewOrderdetail = false;
    };
    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/orders/orders.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_billing_service__WEBPACK_IMPORTED_MODULE_2__["BillingService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/productcard/productcard.component.css":
/*!*******************************************************!*\
  !*** ./src/app/productcard/productcard.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RjYXJkL3Byb2R1Y3RjYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/productcard/productcard.component.html":
/*!********************************************************!*\
  !*** ./src/app/productcard/productcard.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mg-4 mt-5\">\n  <div class=\"card-img-wrapper\">\n    <img class=\"card-img-top\" src=\"{{product.photoUrl}}\" alt=\"\">\n    <!-- <img class=\"card-img-top\" src=\"assets/apple.jpg\" alt=\"\"> -->\n\n    <ul class=\"list-inline member-icons animate text-center\">\n      <!-- <li class=\"list-inline-item\"><button class=\"btn btn-primary\"><i class=\"fa fa-user\"></i></button></li> -->\n      <li class=\"list-inline-item\"><button class=\"btn btn-primary\" (click)=\"AddToCart()\"><i class=\"fa fa-heart\"></i></button></li>\n      <!-- <li class=\"list-inline-item\"><button class=\"btn btn-primary\"><i class=\"fa fa-envelope\"></i></button></li> -->\n    </ul>\n  </div>\n  <div class=\"card-body p-1\">\n    <h6 class=\"card-title text-center mb-1\"><i class=\"fa fa-user\"></i>\n    {{product.name}}, ${{product.price}}\n    </h6>\n    <p class=\"card- text text-muted text-center\">{{product.description}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/productcard/productcard.component.ts":
/*!******************************************************!*\
  !*** ./src/app/productcard/productcard.component.ts ***!
  \******************************************************/
/*! exports provided: ProductcardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductcardComponent", function() { return ProductcardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");




var ProductcardComponent = /** @class */ (function () {
    function ProductcardComponent(auth, alertify) {
        this.auth = auth;
        this.alertify = alertify;
        this.AddProductToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ProductcardComponent.prototype.ngOnInit = function () {
    };
    ProductcardComponent.prototype.AddToCart = function () {
        if (!this.auth.loggedIn()) {
            this.alertify.error('Please Sign in or Register to access cart items ');
        }
        else {
            this.AddProductToCart.emit(this.product);
            this.alertify.success('Product added to cart');
        }
        // this.AddProductToCart.emit(this.product);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductcardComponent.prototype, "AddProductToCart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductcardComponent.prototype, "product", void 0);
    ProductcardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productcard',
            template: __webpack_require__(/*! ./productcard.component.html */ "./src/app/productcard/productcard.component.html"),
            styles: [__webpack_require__(/*! ./productcard.component.css */ "./src/app/productcard/productcard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], ProductcardComponent);
    return ProductcardComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div   class=\"container mt-5\">\n  \n  <div class=\"row\" *ngIf=\"createNewProduct\">\n    <div class=\"col-lg-12\">\n      <fieldset>\n        <legend><h5><b>New Product</b></h5></legend>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label class=\"control-label col-md-4\">Name</label>\n                    <div class=\"col-md-8\">\n                        <input class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"product.name\" required  />\n\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"control-label col-md-4\">Price</label>\n                    <div class=\"col-md-8\">\n                        <input class=\"form-control\" id=\"price\" name=\"price\" [(ngModel)]=\"product.price\" required  />\n\n                    </div>\n                  </div>               \n\n               \n\n                <div class=\"form-group\">\n                  <label class=\"control-label col-md-4\">&nbsp;</label>\n                  <div class=\"col-md-8\">\n                      <input type=\"button\" value=\"Save\" class=\"btn btn-primary\" (click)=\"SaveProduct()\" style=\"float: left;\" id=\"btnSave\"  />\n  \n  \n                  </div>\n              </div>\n            </div>\n\n\n            <div class=\"col-md-6\">\n\n                <div class=\"form-group\">\n                    <label class=\"control-label col-md-4\">Description</label>\n                    <div class=\"col-md-8\">\n                        <input class=\"form-control\" id=\"description\" [(ngModel)]=\"product.description\" name=\"description\" required  />\n\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label col-md-4\">Add Picture</label>\n                    <div class=\"col-md-8\">\n                        <!-- <input class=\"form-control\" id=\"photoUrl\" [(ngModel)]=\"product.photoUrl\" name=\"photoUrl\" required  />-->\n                        <input type=\"file\" (change)=\"OnFileChange($event)\"/> \n\n                    </div>\n                </div>\n               \n                <div class=\"form-group\">\n                  <label class=\"control-label col-md-4\">&nbsp;</label>\n                  <div class=\"col-md-8\">\n                    <input class=\"form-control\" style=\"display: none;\" id=\"productId\" name=\"productId\" [(ngModel)]=\"product.productId\" required display=\"false\" />\n                    \n                  </div>\n              </div>\n            </div>\n        </div>\n    </fieldset>\n    <hr />\n  \n    </div>\n  </div>\n\n  \n  <div class=\"row\" *ngIf=\"!createNewProduct\">\n    <div class=\"row\" > \n      <div class=\"col-lg-12\">        \n         \n              <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                      <label class=\"control-label col-md-4\">&nbsp;</label>\n                      <div class=\"col-md-8\">                        \n                          <button  id=\"btnNewProduct\"  class=\"ml-auto btn hvr-hover btn btn-success\" (click)=\"CreateNewProduct()\" >New Product</button> \n                      </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                      <label class=\"control-label col-md-4\">&nbsp;</label>\n                      <div class=\"col-md-8\">                          \n                       \n                      </div>\n                  </div>\n                </div>\n              </div>\n      </div> \n\n      </div>\n    <div class=\"row\" >      \n      <div class=\"col-lg-12\">\n          <div class=\"table-main table-responsive\">\n              <table class=\"table\">\n                  <thead>\n                      <tr>\n                          <th>Images</th >\n                          <th>Product Name</th>                          \n                          <th>Description</th>\n                          <th>Price</th>\n                          <th>Remove</th>\n                          <th>Edit</th>\n                      </tr>\n                  </thead>\n                  <tbody>\n                      <tr *ngFor=\"let product of products\">\n                          <td class=\"thumbnail-img\">\n                              <a href=\"#\">\n        <img class=\"img-fluid\" src=\"{{product.photoUrl}}\" alt=\"\" />\n      </a>\n                          </td>\n                          <td class=\"name-pr\">\n                              \n                                {{product.name}}\n      \n                          </td>\n\n                          <td class=\"total-pr\">\n                            <p> {{product.description}}</p>\n                        </td>\n                          <td class=\"price-pr\">\n                              <p>$ {{product.price}}</p>\n                          </td>\n                          \n                          \n                          <td class=\"remove-pr\">\n                             \n        <i class=\"fa fa-remove\" (click)= \"removeProduct(product)\"></i>\n     \n                          </td>\n                          <td class=\"remove-pr\">\n                             \n                            <i class=\"fa fa-edit\" (click)= \"EditProduct(product)\"></i>\n                         \n                            </td>\n                      </tr>\n                     \n                  </tbody>\n              </table>\n          </div>\n      </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/cart.service */ "./src/app/_services/cart.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/product.service */ "./src/app/_services/product.service.ts");






var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(auth, alertify, cartservice, productservice) {
        this.auth = auth;
        this.alertify = alertify;
        this.cartservice = cartservice;
        this.productservice = productservice;
        this.createNewProduct = false;
        this.selectedFile = null;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productservice.getProducts().subscribe(function (products) {
            _this.products = products;
        });
    };
    ProductsComponent.prototype.OnFileChange = function (event) {
        this.selectedFile = event.target.files[0];
    };
    ProductsComponent.prototype.CreateNewProduct = function () {
        this.product = this.productservice.product;
        this.createNewProduct = true;
    };
    ProductsComponent.prototype.SaveProduct = function () {
        var _this = this;
        if (this.product.productId === 0) {
            this.productservice.product = this.product;
            var fd = new FormData();
            fd.append('image', this.selectedFile, this.product.productId.toString());
            this.productservice.UploadfFile(fd).subscribe(function (photoUrl) {
                _this.product.photoUrl = photoUrl;
            });
            this.productservice.saveProduct().subscribe(function (product) {
                _this.product = product;
                _this.productservice.products.push(_this.product);
                _this.products = _this.productservice.products;
            });
            this.createNewProduct = false;
        }
        this.createNewProduct = false;
    };
    ProductsComponent.prototype.removeProduct = function (product) {
        var index = this.productservice.products.indexOf(product.productId, 0);
        this.productservice.products.splice(index, 1);
        this.products = this.productservice.products;
    };
    ProductsComponent.prototype.EditProduct = function (product) {
        this.createNewProduct = true;
        this.editableTempProduct = product;
        this.product = product;
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #registerForm = \"ngForm\" (ngSubmit) = \"register()\">\n  <h2 class=\"text-center text-primary\">Sign Up</h2>\n  <hr>\n\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" name=\"username\" required placeholder=\"Username\" [(ngModel)]=\"model.username\">\n  </div>\n\n  <div class=\"form-group\">\n    <input type=\"password\" class=\"form-control\" name=\"password\" required  placeholder=\"Password\" [(ngModel)]=\"model.password\">\n  </div>\n\n  <div class=\"form-group text-center\">\n    <button class=\"btn btn-success\" type=\"submit\">Register</button>\n    <button class=\"btn btn-default\" type=\"button\" (click)=\"cancel()\">Cancel</button>\n  </div>\n  \n</form>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, alertify, router) {
        this.auth = auth;
        this.alertify = alertify;
        this.router = router;
        this.model = {};
        this.CancelRegisterMode = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.auth.register(this.model).subscribe(function () {
            _this.alertify.success('successful');
            _this.router.navigate(['/gallery']);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    RegisterComponent.prototype.cancel = function () {
        this.CancelRegisterMode.emit(false);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RegisterComponent.prototype, "CancelRegisterMode", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _carts_carts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carts/carts.component */ "./src/app/carts/carts.component.ts");
/* harmony import */ var _myorders_myorders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./myorders/myorders.component */ "./src/app/myorders/myorders.component.ts");
/* harmony import */ var _cartlist_cartlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cartlist/cartlist.component */ "./src/app/cartlist/cartlist.component.ts");
/* harmony import */ var _billing_billing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./billing/billing.component */ "./src/app/billing/billing.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");










var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]],
        children: [
            { path: 'orders', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_2__["OrdersComponent"] },
            { path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"] },
            { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"] },
            { path: 'myorders', component: _myorders_myorders_component__WEBPACK_IMPORTED_MODULE_5__["MyordersComponent"] },
            { path: 'billing', component: _billing_billing_component__WEBPACK_IMPORTED_MODULE_7__["BillingComponent"] },
            { path: 'cartlist', component: _cartlist_cartlist_component__WEBPACK_IMPORTED_MODULE_6__["CartlistComponent"] },
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"] },
            { path: 'carts', component: _carts_carts_component__WEBPACK_IMPORTED_MODULE_4__["CartsComponent"] }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #registerForm = \"ngForm\" (ngSubmit) = \"login()\" class=\"dialog-body\" >\n  <h2 class=\"text-center text-primary\">Sign In</h2>\n  <hr>\n\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" name=\"username\" required placeholder=\"Username\" [(ngModel)]=\"model.username\">\n  </div>\n\n  <div class=\"form-group\">\n    <input type=\"password\" class=\"form-control\" name=\"password\" required  placeholder=\"Password\" [(ngModel)]=\"model.password\">\n  </div>\n\n  <div class=\"form-group text-center\">\n    <button class=\"btn btn-success\" type=\"submit\">Sign In</button>\n    <button class=\"btn btn-default\" type=\"button\" (click)=\"cancel()\">Cancel</button>\n  </div>\n  \n</form>\n\n\n\n<!-- <div class=\"dialog-container\" >\n  <div class=\"dialog\" style=\"text-align: center;\">\n      <div class=\"dialog-title\">\n        \n \n        <form #registerForm = \"ngForm\" (ngSubmit) = \"login()\" class=\"dialog-body\" >\n          <h2 class=\"text-center text-primary\">Sign In</h2>\n          <hr>\n        \n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" name=\"username\" required placeholder=\"Username\" [(ngModel)]=\"model.username\">\n          </div>\n        \n          <div class=\"form-group\">\n            <input type=\"password\" class=\"form-control\" name=\"password\" required  placeholder=\"Password\" [(ngModel)]=\"model.password\">\n          </div>\n        \n          <div class=\"form-group text-center\">\n            <button class=\"btn btn-success\" type=\"submit\">Sign In</button>\n            <button class=\"btn btn-default\" type=\"button\" (click)=\"cancel()\">Cancel</button>\n          </div>\n          \n        </form>\n        \n     \n      <div class=\"dialog-buttons\">\n          <button class=\"btn btn-secondary mr-auto\" >Cancel</button>\n         \n          <button class=\"btn btn-success ml-auto\" >Order </button>\n      </div>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");





var SigninComponent = /** @class */ (function () {
    function SigninComponent(auth, alertify, router) {
        this.auth = auth;
        this.alertify = alertify;
        this.router = router;
        this.model = {};
        this.CancelSignInMode = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    // constructor(public auth: AuthService, private router: Router) { }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.model).subscribe(function (next) {
            _this.alertify.success('successfully logged in');
        }, function (error) {
            _this.alertify.error('failed to log in');
        }, function () { _this.router.navigate(['/home']); });
    };
    SigninComponent.prototype.loggedIn = function () {
        // return  this.auth.loggedIn();
        var token = localStorage.getItem('token');
        return !!token;
    };
    SigninComponent.prototype.logOut = function () {
        localStorage.removeItem('token');
        this.alertify.message('logged out');
        this.router.navigate(['/home']);
    };
    SigninComponent.prototype.cancel = function () {
        this.CancelSignInMode.emit(false);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SigninComponent.prototype, "CancelSignInMode", void 0);
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: ''
    // apiUrl: 'http://localhost:5000/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\THOMAS JINDU\source\repos\OnlineFruitVegShop\OnlineFruitVegShop-SPA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map