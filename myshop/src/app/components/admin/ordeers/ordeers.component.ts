import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-ordeers',
  templateUrl: './ordeers.component.html',
  styleUrls: ['./ordeers.component.scss']
})
export class OrdeersComponent implements OnInit {

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.getOrders();
  }

}
