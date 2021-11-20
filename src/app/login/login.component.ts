import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { Subject } from 'rxjs';
import { LocalStorageService } from '../localStorageService';
import { Local } from 'protractor/built/driverProviders';

export interface User {
  id?: number;
  username: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = { username: '', password: '' };
  localStorageService: LocalStorageService<User>;
  currentUser: User = null;
  constructor(private router: Router, private toastService: ToastService) {
    this.localStorageService = new LocalStorageService('user');
  }



  ngOnInit() {
  }

  login(user: User) {
    const defaultUser: User = { username: 'chue', password: 'chue123' };
    if (user.username == '' && user.password == '') {
      this.toastService.showToast('warning', 2000, 'Login failed! Please specify user and password!');
    } else if (user.username === defaultUser.username && user.password === defaultUser.password) {
      this.localStorageService.saveItemsToLocalStorage(user);
      this.router.navigate(['launch-page', user]);
    } else {
      this.toastService.showToast('warning', 2000, 'Invaid credentials');
    }
  }

}
