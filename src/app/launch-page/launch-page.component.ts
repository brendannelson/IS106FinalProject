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
  selector: 'app-launch-page',
  templateUrl: './launch-page.component.html',
  styleUrls: ['./launch-page.component.css']
})
export class LaunchPageComponent implements OnInit {

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

  addItem1() {
    this.items.push({
      "name": "Studio Glass Water Bottle",
      "image": "../../assets/1.png",
      "description": "Drink directly from glass with ZULU Studio. Made of odor-free, stain-free, and clean tasting glass.",
      "OZ": 28,
      "price": 16.99,
      "quantity": 1
    });
    localStorage.setItem('inventory', JSON.stringify(this.items))
    this.toastService.showToast('success', 2000, "Successfully added to cart")
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

  addItem3() {
    this.items.push({
      "name": "Soma Glass Water Bottle",
      "image": "../../assets/3.jpg",
      "description": "Stay hydrated in style. Crafted from shatter-resistant glass, and sporting an easy-to-grip sleeve, you’ll...",
      "OZ": 25,
      "price": 35.00,
      "quantity": 1,
    });
    localStorage.setItem('inventory', JSON.stringify(this.items))
    this.toastService.showToast('success', 2000, "Successfully added to cart")
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
  
  save() {
    localStorage.setItem('inventory', JSON.stringify(this.items))
    this.toastService.showToast('success', 2000, "Successfully saved")
  }

  checkout() {
    const total = this.calcualte();
    if (this.names == '') {
      this.toastService.showToast('danger', 2000, "Name must not be null");
    } else if (this.names.indexOf(', ') === -1) {
      this.toastService.showToast('danger', 2000, "Name must contain a comma and a space!")
    } else {
      this.router.navigate(['invoice', total]);
    }
    localStorage.setItem('calculated', JSON.stringify(total));
  }

  calcualte() {
    let tax = 0;
    let total = 0;
    let subTotal = 0;
    let names
    let name1
    let name2
    let fullName
    for (let i = 0; i < this.items.length; i++) {
      subTotal += this.items[i].quantity * this.items[i].price
      tax = subTotal * .15
      total = subTotal + tax
      names = this.names.replace(', ', ' ').split(' ')
      name1 = names[0]
      name2 = names[1]
      fullName = name2 + ' ' + name1
    } return {
      names: fullName,
      tax: tax,
      subTotal: subTotal,
      total: total,
    }
  }


}



