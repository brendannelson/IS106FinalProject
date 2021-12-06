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
  selector: 'app-eighteen-ounce',
  templateUrl: './eighteen-ounce.component.html',
  styleUrls: ['./eighteen-ounce.component.css']
})
export class EighteenOunceComponent implements OnInit {

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

  addItem4() {
    this.items.push({
      "name": "Borosilicate Glass Water Bottle",
      "image": "../../assets/4.jpg",
      "description": "Our Faded glass bottles are BPA, BPS, PVC, Lead and Cadmium free. They won’t leach chemicals similar to plastic...",
      "OZ": 18,
      "price": 18.95,
      "quantity": 1,
    });
    localStorage.setItem('inventory', JSON.stringify(this.items))
    this.toastService.showToast('success', 2000, "Successfully added to cart")
  }

  addItem5() {
    this.items.push({
      "name": "Floriculture Glass Water Bottle",
      "image": "../../assets/5.jpg",
      "description": "Heat-resistant borosilicate glass water bottle. Includes stainless steel cap & fabric carrying strap. Hand wash...",
      "OZ": 18.6,
      "price": 15.00,
      "quantity": 1,
    });
    localStorage.setItem('inventory', JSON.stringify(this.items))
    this.toastService.showToast('success', 2000, "Successfully added to cart")
  }

  addItem12() {
    this.items.push({
      "name": "Glass Water Bottle",
      "image": "../../assets/12.png",
      "description": "Water bottle made from heat-resistant, durable borosilicate glass with a protective silicone cover...",
      "OZ": 18,
      "price": 45.00,
      "quantity": 1,
    });
    localStorage.setItem('inventory', JSON.stringify(this.items))
    this.toastService.showToast('success', 2000, "Successfully added to cart")
  }
  

}
