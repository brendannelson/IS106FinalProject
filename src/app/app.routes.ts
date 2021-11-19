import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LaunchPageComponent } from './launch-page/launch-page.component';

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
    path: 'launch-page',
    component: LaunchPageComponent
  },
  {
    path: '**',
    component: LoginComponent
  },
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
