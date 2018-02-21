import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';
import { Mobile } from '../mobile';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  mobile: Array<Mobile>;

  constructor(private _mobileService: MobileService, private _route: Router, private aR: ActivatedRoute) {

   }

  ngOnInit() {
    this.aR.params.subscribe((params) =>{
      let code = params['code'];

      this._mobileService.getMobileByCode(code)
      .subscribe(res => this.mobile = res);

    })
  }

  deleteMobile(mobileId){
    this._mobileService.deleteMobile(mobileId)
    .subscribe( res => {
      this._route.navigateByUrl('/');
    })
  }

}
