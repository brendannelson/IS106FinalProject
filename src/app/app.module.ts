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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainNavComponent,
    HomeComponent,
    CartComponent
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
