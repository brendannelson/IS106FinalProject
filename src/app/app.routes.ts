import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LaunchPageComponent } from './launch-page/launch-page.component';
import { SalesComponent } from './sales/sales.component';
import { SixteenOunceComponent } from './sixteen-ounce/sixteen-ounce.component';
import { EighteenOunceComponent } from './eighteen-ounce/eighteen-ounce.component';
import { TwentyOunceComponent } from './twenty-ounce/twenty-ounce.component'; 
import { ThirtytwoOunceComponent } from './thirtytwo-ounce/thirtytwo-ounce.component';
import { ThirtythreeOunceComponent } from './thirtythree-ounce/thirtythree-ounce.component';
import { ThirtyfourOunceComponent } from './thirtyfour-ounce/thirtyfour-ounce.component';
import { MyAccountComponent } from './my-account/my-account.component';

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
  path: 'sales',
    component: SalesComponent
  },
  {
    path: 'sixteen',
    component: SixteenOunceComponent
  },
  {
    path: 'eighteen',
    component: EighteenOunceComponent
  },
  {
    path: 'twenty',
    component: TwentyOunceComponent
  },
  {
    path: 'thirtytwo',
    component: ThirtytwoOunceComponent
  },
  {
    path: 'thirtythree',
    component: ThirtythreeOunceComponent
  },
  {
    path: 'thirtyfour',
    component: ThirtyfourOunceComponent
  }, {
    path: 'myaccount',
    component: MyAccountComponent
  }
  
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
