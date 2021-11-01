import { Component, OnInit, Input } from '@angular/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  @Input() dismissible = false;
  alerts: Array<any> = [];

  constructor(private toastService: ToastService) { }

  ngOnInit() {
    this.toastService.toastChanged.subscribe((alerts) => {
      this.alerts.push(alerts);
    });
  }

  onClosed(e) {
  }

}
