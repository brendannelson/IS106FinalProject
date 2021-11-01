import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  }, {
    path: 'invoice',
    component: HomeComponent
  }, {
    path: 'cart',
    component: CartComponent
  }, {
    path: '**',
    component: LoginComponent
  }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
