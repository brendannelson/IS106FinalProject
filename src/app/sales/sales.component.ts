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
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
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


  remove(index: number) {
    this.items.splice(index, 1);
    localStorage.setItem('inventory', JSON.stringify(this.items))
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

  save() {
    localStorage.setItem('inventory', JSON.stringify(this.items))
    this.toastService.showToast('success', 2000, "Successfully saved")
  }

}
