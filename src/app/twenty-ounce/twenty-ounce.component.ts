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
  selector: 'app-twenty-ounce',
  templateUrl: './twenty-ounce.component.html',
  styleUrls: ['./twenty-ounce.component.css']
})
export class TwentyOunceComponent implements OnInit {

  items: Array<Items> = [];
  name = '';
  names = '';

  constructor(
    private http: Http,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) { }

  async ngOnInit() {
    this.items = await this.loadItems();
  }

  async loadItems() {
    let items = JSON.parse(localStorage.getItem('inventory'));
    this.items = items;
    return items;
  }

  addItem2() {
    this.items.push({
      "name": "Porter Glass Water Bottle",
      "image": "../../assets/2.jpg",
      "description": "Upgrade your daily hydration with the Porter water bottle from W&P. Updated with a chic terrazzo design...",
      "OZ": 20,
      "price": 19.99,
      "quantity": 1
    });
    localStorage.setItem('inventory', JSON.stringify(this.items))
    this.toastService.showToast('success', 2000, "Successfully added to cart")
  }

  addItem8() {
    this.items.push({
      "name": "Evolve Water Bottle",
      "image": "../../assets/8.jpeg",
      "description": "Water bottle with sure-grip and protection sleeve: A protective silicone sleeve is included with...",
      "OZ": 20,
      "price": 8.97,
      "quantity": 1,
    });
    localStorage.setItem('inventory', JSON.stringify(this.items))
    this.toastService.showToast('success', 2000, "Successfully added to cart")
  }

}
