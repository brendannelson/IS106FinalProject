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
  selector: 'app-thirtytwo-ounce',
  templateUrl: './thirtytwo-ounce.component.html',
  styleUrls: ['./thirtytwo-ounce.component.css']
})
export class ThirtytwoOunceComponent implements OnInit {
 
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

  addItem10() {
    this.items.push({
      "name": "Xtremeglas Hydrate Replacement Bottle",
      "image": "../../assets/10.jpg",
      "description": "This Xtremeglas Hydrate Replacement bottle is a direct replacement for the Hydrate line of water...",
      "OZ": 32,
      "price": 19.99,
      "quantity": 1,
    });
    localStorage.setItem('inventory', JSON.stringify(this.items))
    this.toastService.showToast('success', 2000, "Successfully added to cart")
  }

}
