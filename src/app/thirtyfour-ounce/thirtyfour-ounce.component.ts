import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';


export interface Items {
  name: string;
  image: string;
  description: string;
  OZ: number;
  price: number;
  quantity: number;
}
@Component({
  selector: 'app-thirtyfour-ounce',
  templateUrl: './thirtyfour-ounce.component.html',
  styleUrls: ['./thirtyfour-ounce.component.css']
})
export class ThirtyfourOunceComponent implements OnInit {

  items: Array<Items> = [];
  name = '';
  names = '';

  constructor(
    private http: Http,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) {

  }

  async ngOnInit() {
    this.items = await this.loadItems();
  }

  async loadItems() {
    let items = JSON.parse(localStorage.getItem('inventory'));
    this.items = items;
    return items;
  }

  addItem11() {
    this.items.push({
      "name": "Oneisell Large Capacity",
      "image": "../../assets/11.jpg",
      "description": "This generously-sized 34oz bottle from ONEISALL boasts a double-walled construction, allowing it to keep...",
      "OZ": 34,
      "price": 33.00,
      "quantity": 1,
    });
    localStorage.setItem('inventory', JSON.stringify(this.items))
    this.toastService.showToast('success', 2000, "Successfully added to cart")
  }


}
