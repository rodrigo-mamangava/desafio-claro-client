import { Component, OnInit } from '@angular/core';
import {MobileService} from '../mobile.service';
import {Mobile} from '../mobile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mobiles: Array<Mobile>;

  constructor(private mobileService: MobileService) { }

  ngOnInit() {
    this.mobileService.getMobiles()
    .subscribe(res => this.mobiles = res);
  }

}
