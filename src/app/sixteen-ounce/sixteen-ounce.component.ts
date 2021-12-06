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
  selector: 'app-sixteen-ounce',
  templateUrl: './sixteen-ounce.component.html',
  styleUrls: ['./sixteen-ounce.component.css']
})
export class SixteenOunceComponent implements OnInit {
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


  addItem6() {
    this.items.push({
      "name": "TUTU 500 ML",
      "image": "../../assets/6.jpg",
      "description": "limited edition glass water bottle. Perfect for: everyday, in the car, gym time. 500mL/16oz...",
      "OZ": 16,
      "price": 35.00,
      "quantity": 1
    });
    localStorage.setItem('inventory', JSON.stringify(this.items))
    this.toastService.showToast('success', 2000, "Successfully added to cart")
  }

  addItem13() {
    this.items.push({
      "name": "Wide Mouth Glass Water Bottle",
      "image": "../../assets/13.jpg",
      "description": "This straight, see-through canister gets directly to your point. BPA free plastic screw-on cap features a carry handle for...",
      "OZ": 16,
      "price": 6.55,
      "quantity": 1,
    });
    localStorage.setItem('inventory', JSON.stringify(this.items))
    this.toastService.showToast('success', 2000, "Successfully added to cart")
  }

}
