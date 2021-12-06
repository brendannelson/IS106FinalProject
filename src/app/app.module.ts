import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ToastModule } from './toast/toast.module';
import { LoginComponent } from './login/login.component';

import { AppRoutes } from './app.routes';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { LaunchPageComponent } from './launch-page/launch-page.component';
import { SalesComponent } from './sales/sales.component';
import { SixteenOunceComponent } from './sixteen-ounce/sixteen-ounce.component';
import { EighteenOunceComponent } from './eighteen-ounce/eighteen-ounce.component';
import { TwentyOunceComponent } from './twenty-ounce/twenty-ounce.component';
import { ThirtytwoOunceComponent } from './thirtytwo-ounce/thirtytwo-ounce.component';
import { ThirtythreeOunceComponent } from './thirtythree-ounce/thirtythree-ounce.component';
import { ThirtyfourOunceComponent } from './thirtyfour-ounce/thirtyfour-ounce.component';
import { MyAccountComponent } from './my-account/my-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainNavComponent,
    HomeComponent,
    CartComponent,
    LaunchPageComponent,
    SalesComponent,
    SixteenOunceComponent,
    EighteenOunceComponent,
    TwentyOunceComponent,
    ThirtytwoOunceComponent,
    ThirtythreeOunceComponent,
    ThirtyfourOunceComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ToastModule,
    AppRoutes,
    BrowserAnimationsModule,
    MaterialDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
