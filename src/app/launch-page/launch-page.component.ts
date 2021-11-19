import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';


export interface Bikes {
  id: number;
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

  bikes: Array<Bikes> = [];
  name = '';
  
  constructor(
    private http: Http,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) {

   }

  async ngOnInit() {
    this.bikes = await this.loadBikes();
  }


  async loadBikes() {
    let bikes = JSON.parse(localStorage.getItem('inventory'));
    if (bikes && bikes.length > 0) {
    } else {
      bikes = await this.loadBikesFromJson();
    }
    this.bikes = bikes;
    return bikes;
  }

  async loadBikesFromJson() {
    const bikes = await this.http.get('assets/inventory.json').toPromise();
    return bikes.json();
  }

  remove(index: number) {
    this.bikes.splice(index, 1);
    localStorage.setItem('inventory', JSON.stringify(this.bikes))
  }

  addBike1() {
    this.bikes.push({
      "id": 1,
      "image": "../../assets/bike1.jpeg",
      "description": "Bike Model 1",
      "OZ": 12,
      "price": 5000,
      "quantity": 1
    });
    localStorage.setItem('inventory', JSON.stringify(this.bikes))
    this.toastService.showToast('success', 2000, "Successfully saved")
  }

  addBike2() {
    this.bikes.push({
      "id": 2,
      "image": "../../assets/bike2.jpeg",
      "description": "Bike Model 2",
      "OZ": 16,
      "price": 4000,
      "quantity": 1
    });
    localStorage.setItem('inventory', JSON.stringify(this.bikes))
    this.toastService.showToast('success', 2000, "Successfully saved")
  }

  addBike3() {
    this.bikes.push({
      "id": 3,
      "image": "../../assets/bike3.jpeg",
      "description": "Bike Model 3",
      "OZ": 20,
      "price": 3000,
      "quantity": 1
    });
    localStorage.setItem('inventory', JSON.stringify(this.bikes))
    this.toastService.showToast('success', 2000, "Successfully saved")
  }

  save() {
    localStorage.setItem('inventory', JSON.stringify(this.bikes))
    this.toastService.showToast('success', 2000, "Successfully saved")
  }

  checkout() {
    const total = this.calcualte();
    if (this.name == '') {
      this.toastService.showToast('danger', 2000, "Name must not be null");
    } else if (this.name.indexOf(', ') === -1) {
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
    let name
    let name1
    let name2
    let fullName
    for (let i = 0; i < this.bikes.length; i++) {
      total += this.bikes[i].quantity * this.bikes[i].price
      tax = total * .15
      subTotal = total - tax
      name = this.name.replace(', ', ' ').split(' ')
      name1 = name[0]
      name2 = name[1]
      fullName = name2 + ' ' + name1



    } return {
      names: fullName,
      tax: tax,
      subTotal: subTotal,
      total: total,
    }
  }

}

