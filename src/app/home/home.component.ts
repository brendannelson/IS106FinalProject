import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { loadQueryList } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) { }
  total = {};

  ngOnInit() {
    this.total = JSON.parse(localStorage.getItem('calculated'));
  }

}
