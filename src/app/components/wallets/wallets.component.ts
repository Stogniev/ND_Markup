import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.scss']
})
export class WalletsComponent implements OnInit {
  active: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  callModal() {
    this.active = !this.active;
  }

}
