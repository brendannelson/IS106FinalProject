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
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

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

  save() {
    localStorage.setItem('inventory', JSON.stringify(this.items))
    this.toastService.showToast('success', 2000, "Successfully saved")
  }

  checkout() {
    const total = this.calculate();
    if (this.names == '') {
      this.toastService.showToast('danger', 2000, "Name must not be null");
    } else if (this.names.indexOf(', ') === -1) {
      this.toastService.showToast('danger', 2000, "Name must contain a comma and a space!")
    } else {
      this.router.navigate(['invoice', total]);
    }
    localStorage.setItem('calculated', JSON.stringify(total));
  }


  calculate() {
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
      tax: Math.round(tax * 100) / 100,
      subTotal: Math.round(subTotal * 100) / 100,
      total: Math.round(total * 100) /100,
    }
  }

}




