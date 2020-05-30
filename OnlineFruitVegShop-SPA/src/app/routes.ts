

 import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { Routes, CanDeactivate } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { CartsComponent } from './carts/carts.component';
import { MyordersComponent } from './myorders/myorders.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { BillingComponent } from './billing/billing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
         canActivate: [AuthGuard],
        children: [
            { path: 'orders', component: OrdersComponent},
            { path: 'gallery', component: GalleryComponent},
            { path: 'products', component: ProductsComponent},
            { path: 'myorders', component: MyordersComponent},
             { path: 'billing', component: BillingComponent},
            { path: 'cartlist', component: CartlistComponent},
            { path: 'dashboard', component: DashboardComponent},
            { path: 'carts', component: CartsComponent}        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'}

];
