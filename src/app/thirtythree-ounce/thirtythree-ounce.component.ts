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
  selector: 'app-thirtythree-ounce',
  templateUrl: './thirtythree-ounce.component.html',
  styleUrls: ['./thirtythree-ounce.component.css']
})
export class ThirtythreeOunceComponent implements OnInit {

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

  addItem7() {
    this.items.push({
      "name": "Libbey® Kinetix",
      "image": "../../assets/7.jpg",
      "description": "This sleek glass water bottle by Libbey® helps elevate tabletop water presentation to new levels...",
      "OZ": 33,
      "price": 13.19,
      "quantity": 1
    });
    localStorage.setItem('inventory', JSON.stringify(this.items))
    this.toastService.showToast('success', 2000, "Successfully added to cart")
  }

  addItem9() {
    this.items.push({
      "name": "Personalised Glass Bottle",
      "image": "../../assets/9.jpg",
      "description": "A personalised glass fliptop water bottle is true an eye-catcher for your table. Are you drinking...",
      "OZ": 33,
      "price": 16.95,
      "quantity": 1,
    });
    localStorage.setItem('inventory', JSON.stringify(this.items))
    this.toastService.showToast('success', 2000, "Successfully added to cart")
  }
  
}
