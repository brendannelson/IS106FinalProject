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

  addItem1() {
    this.items.push({
      "name": "Item 1",
      "image": "../../assets/bike1.jpeg",
      "description": "ILorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      "OZ": 12,
      "price": 5000,
      "quantity": 1
    });
    localStorage.setItem('inventory', JSON.stringify(this.items))
    this.toastService.showToast('success', 2000, "Successfully added to cart")
  }

  addItem2() {
    this.items.push({
      "name": "Item 2",
      "image": "../../assets/bike2.jpeg",
      "description": "ILorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      "OZ": 16,
      "price": 4000,
      "quantity": 1
    });
    localStorage.setItem('inventory', JSON.stringify(this.items))
    this.toastService.showToast('success', 2000, "Successfully added to cart")
  }

  addItem3() {
    this.items.push({
      "name": "Item 3",
      "image": "../../assets/bike3.jpeg",
      "description": "ILorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      "OZ": 20,
      "price": 3000,
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
      total += this.items[i].quantity * this.items[i].price
      tax = total * .15
      subTotal = total - tax
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
